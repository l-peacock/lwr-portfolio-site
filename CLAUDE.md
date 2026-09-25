# lwr-portfolio

A personal developer portfolio built with open-source **LWR** (Lightning Web
Runtime) and **LWC** (Lightning Web Components) — no Salesforce org, no Apex,
no Experience Cloud metadata. It's statically generated and served from
`docs/` on GitHub Pages at [lachlanpeacock.com](https://lachlanpeacock.com).

This repo is one of two portfolio properties. The other — a Salesforce
Experience Cloud (LWR-based) site with Apex, Experience Builder, and
Digital Experience metadata — lives in a separate repo. Don't assume Apex,
`force-app`, scratch orgs, or Salesforce CLI apply here.

## Structure

```
.github/workflows/       # CI (runs on every PR)
src/
  assets/                 # static assets (images, favicon)
  layouts/                # HTML document shell (title/meta/favicon) — see Publishing below
  CNAME, .nojekyll        # GitHub Pages config, copied into docs/ on every build
  modules/
    base/                 # app shell (base/app, base/designTokens)
    ui/                   # presentational components (banner, footer, icon, …)
docs/                     # build output — served by GitHub Pages, committed to git
lwr.config.json           # LWR server/build config (module dirs, routes, assets)
jest.config.js            # test config (see Testing below)
eslint.config.js          # ESLint flat config (see Linting below)
```

Requires Node ≥22.22.1 (Volta pins 24.21.0) — driven by `lwr@0.24`'s own
engine requirement and tightened further by `lint-staged@17`.

Each component is a folder: `<name>.js` (required), `<name>.html`,
`<name>.css`, `__tests__/<name>.test.js`. Bare imports use
`<namespace>/<component>` (e.g. `import Icon from "ui/icon"`), where
`<namespace>` is a top-level folder under `src/modules` (`base`, `ui`).

## Commands

- `npm run dev` — local dev server at localhost:3000 (`dev:compat` for AMD/older-browser mode)
- `npm run build:prod-compat` — production build, written **directly into `docs/`**
- `npm run test:unit` / `test:unit:watch` / `test:unit:coverage` — Jest
- `npm run test:validate` — what CI runs (`jest --ci` + GitHub Actions reporter)
- `npm run lint` / `lint:fix` — ESLint (`@lwc/eslint-plugin-lwc` rules)
- `npx prettier --check .` / `--write .` — formatting

## Testing

Standalone `@lwc/jest-preset` + `@sa11y/jest` (see the `lwr-jest-a11y-testing`
skill for the full guide). Every component needs a `__tests__` file that
exercises real behavior plus an `await expect(element).toBeAccessible()`
assertion — the `await` is load-bearing; without it the check silently passes
regardless of actual accessibility. Coverage threshold is 70% (global, in
`jest.config.js`) and CI fails the PR if it isn't met.

## Linting & formatting

ESLint uses flat config (`eslint.config.js` — ESLint 9 no longer reads
`.eslintrc.*`), covering `src/**/*.js` with `@eslint/js`'s recommended rules +
`@lwc/eslint-plugin-lwc`'s LWC-specific rules (no inner HTML, valid
`@api`/`@track`/`@wire` usage, etc.) plus `eslint-plugin-jest`'s
`flat/recommended` for `__tests__/**` files. Prettier covers `*.{js,css,md}`
(tabs, see `.prettierrc`); `docs/`, `coverage/`, `.claude/`, and
`src/layouts/` are excluded — the layouts one is load-bearing, not cosmetic:
Prettier's HTML formatter inserts whitespace inside `{{ }}`/`{{{ }}}` that
breaks the LWR layout template's substitution regex (see Publishing below).
`lint-staged` is configured in `package.json` but there's currently no Husky
pre-commit hook wired up to run it — it only runs when invoked directly or
from CI.

## CI

`.github/workflows/runTests.yml` runs on every PR: Prettier check → ESLint →
`test:validate`. Any failure blocks the merge.

## Publishing

`npm run build:prod-compat` runs `lwr build --mode prod-compat --output docs
--clean` — a full clean build straight into `docs/`. Commit the resulting
`docs/` diff on `main` to publish.

All page metadata is config-driven, not hand-edited into build output:

- `lwr.config.json`'s route `properties` (`title`, `description`, `keywords`,
  `author`) are rendered into the `<head>` via LWR's page-context mechanism.
- `src/layouts/main.html` is the actual HTML document shell (a custom
  `layoutTemplate`, replacing LWR's built-in default layout) — it uses
  `{{page.title}}`, `{{description}}` etc. (dotted-path lookups against
  `{page, ...route.properties}`) plus the required `{{{body}}}` and
  `{{{lwr_resources}}}` placeholders. **Never run Prettier on this file** —
  see Linting above.
- `CNAME` and `.nojekyll` are declared as `assets` entries in
  `lwr.config.json`, sourced from `src/CNAME` / `src/.nojekyll`.

This replaced an earlier setup where those files lived only in the committed
`docs/` output and had to be hand-preserved across builds — a `--clean` build
used to wipe them, and a non-`--clean` build against a directory built by an
older `lwr` version left stale bundle references untouched instead of
updating them. Everything now regenerates correctly from source on every
build; nothing in `docs/` should be hand-edited.

`/lwr-info` in the build output is a mandatory diagnostic route LWR 0.24
always generates (shows LWR/LWC/Node versions) — it can't be disabled via
config, it's not something this project added.

## Design system

Both portfolio sites share the "Morning Sky" design language — see the
`portfolio-design-system` skill for the full palette, type scale, and
voice/tone rules. This repo's token implementation is the CSS-only module
`src/modules/base/designTokens/designTokens.css` (`@import "base/designTokens";`
from a component's own CSS). **Known gap:** the existing components predate
this module and still use their own one-off colors rather than the
`--portfolio-*` tokens — migrating them is a deliberate design task, not
something to do as a side effect of unrelated work.

## `.claude/` agents and skills

- `lwr-static-developer` — builds components (performance/accessibility/polish, in that order)
- `qa-tester` — reviews test coverage, accessibility assertions, lint/format, and bundle size/perf
- `experience-designer` — UX/visual design, shared with the Experience Cloud site
- `portfolio-design-system` — the shared "Morning Sky" design tokens and voice/tone
- `lwr-jest-a11y-testing` — how this repo's Jest + `@sa11y/jest` setup works

## Known gaps

- `ui/contentCard`'s `type="link"` variant isn't implemented (`isLink` is
  referenced in the template but never defined on the class, so that branch
  never renders) — a pre-existing product gap, not a testing gap.
- No Husky pre-commit hook (see Linting above).
