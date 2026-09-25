---
name: lwr-jest-a11y-testing
description: Use when writing, running, or debugging Jest tests for this repo's open-source LWC components — component behavior tests, the required @sa11y/jest `toBeAccessible()` assertion, module resolution for bare `namespace/component` imports, or coverage thresholds. Covers plain `npx jest` / `npm run test:unit*` only (no Salesforce org, no Bazel/core, no sfdx-lwc-jest) — this is a standalone `@lwc/jest-preset` + `@sa11y/jest` setup. DO NOT TRIGGER for Apex tests, Experience Cloud LWC tests, or anything expecting a `WORKSPACE`/Bazel or `force-app` tree — those belong to the separate Salesforce Portfolio Dev Org repo.
---

# Jest + accessibility testing (lwr-portfolio)

This repo tests plain open-source LWC components with `@lwc/jest-preset` and
asserts accessibility with `@sa11y/jest`'s `toBeAccessible()` matcher. There is
no Salesforce org, no Bazel/core build, and no `sfdx-lwc-jest` — just `jest`
run directly against `src/modules/`.

## Running tests

- `npm run test:unit` — whole suite, once
- `npm run test:unit:watch` — watch mode while iterating
- `npm run test:unit:coverage` — whole suite with a coverage report
- `npm run test:validate` — what CI runs (`jest --ci` with the GitHub Actions
  reporter); use this to reproduce a CI failure locally
- `npx jest path/to/some.test.js` — a single file
- `npx jest -t "renders"` — filter by test name

Config lives in `jest.config.js`. It sets:

- `setupFilesAfterEnv: ['<rootDir>/jest-sa11y-setup.js']`, which calls
  `@sa11y/jest`'s `setup()` once so `toBeAccessible()` is available in every
  test file without each file registering it itself.
- A `moduleNameMapper` for bare `<namespace>/<component>` specifiers (e.g.
  `ui/icon` → `src/modules/ui/icon/icon`), matching the namespaces under
  `src/modules` (currently `base`, `ui` — see `lwr.config.json`'s
  `lwc.modules` entry). **Adding a new top-level folder under `src/modules`
  requires updating this regex too**, or imports of components in it will
  fail to resolve in tests with "Cannot find module".
- `coverageThreshold.global` at 70% for branches/functions/lines/statements.
  CI (`.github/workflows/runTests.yml`) fails the build if this isn't met —
  don't lower it to force a build to pass; add tests instead (see the
  `qa-tester` agent).

## Writing a test

Every component gets `__tests__/<component>.test.js` next to it (mirrors the
component's own path). Follow the house style already used across
`src/modules/ui/*/__tests__/*.test.js` and
`src/modules/ui/contentCard/__tests__/contentCard.test.js`:

```js
import { createElement } from "lwc";
import ContentCard from "ui/contentCard";

let element;
describe("ui-content-card", () => {
	beforeEach(() => {
		element = createElement("ui-content-card", { is: ContentCard });
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("should render the provided title and text", () => {
		element.title = "Card title";
		element.text = "Card body copy";
		document.body.appendChild(element);

		expect(element.shadowRoot.querySelector("h1").textContent).toBe(
			"Card title",
		);
	});

	it("is accessible", async () => {
		document.body.appendChild(element);
		await Promise.resolve();
		await expect(element).toBeAccessible();
	});
});
```

Non-negotiables (also stated in the `lwr-static-developer` and `qa-tester`
agents):

- Assert real behavior — props changing output, conditional rendering,
  events — not just "it rendered without throwing."
- Every component needs at least one `toBeAccessible()` assertion against its
  rendered output. **`toBeAccessible()` returns a promise — always
  `await expect(element).toBeAccessible()`.** Forgetting the `await` doesn't
  fail the test file; it silently makes the assertion a no-op that reports no
  issues even when the markup genuinely isn't accessible (this exact bug
  existed in four of this repo's five test files before it was fixed — grep
  for `toBeAccessible` without a preceding `await` if you suspect it's crept
  back in).
- Reset `document.body` between tests (`afterEach`) — LWC elements don't
  unmount themselves.
- Prefer real DOM assertions (`shadowRoot.querySelector`, attributes, text
  content) over snapshots; snapshots are fine only for stable, purely
  presentational markup.
- Don't compare `.innerHTML` between elements to assert "different content
  rendered" — `@lwc/eslint-plugin-lwc`'s `no-inner-html` rule flags it. Assert
  a specific attribute or text node instead.

## Troubleshooting

- **"Cannot find module 'ui/xyz'"** — either the component doesn't exist at
  `src/modules/ui/xyz/xyz.js`, or you added a new `src/modules/<namespace>`
  folder without updating the `moduleNameMapper` regex in `jest.config.js`.
- **`toBeAccessible is not a function`** — the setup file isn't wired up;
  confirm `jest-sa11y-setup.js` is still listed in `jest.config.js`'s
  `setupFilesAfterEnv`.
- **Coverage threshold failure on an unrelated file** — the threshold is
  global, not per-file, so a drop anywhere in `src/modules/**/*.js` can fail
  a PR that didn't touch the uncovered file. Check the full coverage table
  (`npm run test:unit:coverage`), not just the diff.
