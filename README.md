# LWR Portfolio Site

This simple LWR Application serves as my portfolio website. It is hosted on GitHub Pages at [lachlanpeacock.com](https://lachlanpeacock.com)

The repository also contains examples of high-quality coding and documentation standards, unit testing, and a fully automated CI/CD pipeline via GitHub Actions — a quality gate on every Pull Request, and automatic build + publish on every push to `main`.

## Project Structure

The directory structure is as follows:

```
.github/
  └── workflows/        // Workflows for use in GitHub actions
      └── *
docs/                   // the current build of the site, as served on GitHub pages
src/
  ├── assets/           // static assets, such as images
  │   └── *
  |   └── favicon.ico
  ├── layouts/          // the HTML document shell (title/meta/favicon), config-driven — see below
  │   └── main.html
  ├── CNAME             // GitHub Pages custom domain, copied into docs/ on every build
  ├── .nojekyll         // disables Jekyll processing on GitHub Pages, copied into docs/ on every build
  └── modules/          // lwc modules
      └── base/         // base level components and app content
          └── *
      └── ui/           // low-level front-end components
          └── *
lwr.config.json         // lwr configuration
jest.config.json        // jest testing framework configuration
package.json            // npm packaging configuration
```

## Running the Project locally in dev Mode

```bash
yarn install
yarn dev
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Publishing Changes to GitHub Pages

This application is served on GitHub Pages from the `docs/` directory on the
`main` branch — but you shouldn't need to build or touch `docs/` yourself.
Every push to `main` (in practice, merging a PR from `develop`) is built and
published automatically by `.github/workflows/publish.yml`: it runs the same
checks as the PR quality gate, builds the production site, then opens a PR
with the built `docs/` and merges it automatically — no direct push to
`main`, no manual "run the build, commit `docs/`" step.

The page title, meta description/keywords/author, and favicon link come from
`lwr.config.json`'s route `properties` rendered through `src/layouts/main.html`
(LWR's config-driven layout mechanism), and `CNAME`/`.nojekyll` are declared as
assets sourced from `src/` — all of it is regenerated correctly on every build,
so there's nothing to hand-edit or preserve in `docs/`.

If you ever need to build locally instead:

```bash
yarn build:prod-compat
```

This always does a full clean build (`--clean`) and writes straight into
`docs/`; commit the resulting diff yourself if you go this route.

## Unit Testing

This project utilises the jest testing framework, and enforces at least 70% coverage. Each component should contain a `__tests__` subdirectory, with relevant unit tests for the component.

Run the unit tests and check coverage requirements:

```bash
yarn test:unit:coverage
```
