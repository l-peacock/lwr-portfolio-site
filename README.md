# LWR Portfolio Site

This simple LWR Application serves as my portfolio website. It is hosted on GitHub Pages at [lachlanpeacock.com](https://lachlanpeacock.com)

The repository also contains examples of high-quality coding and documentation standards, unit testing, and Pull Request validation via GitHub Actions.

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

This application is served on GitHub pages. It will serve the build in the `docs/` directory in the `main` branch.

Create a new build of the app and commit the resulting `docs/` diff:

```bash
yarn build:prod-compat
```

This always does a full clean build (`--clean`) and writes straight into `docs/`.
The page title, meta description/keywords/author, and favicon link come from
`lwr.config.json`'s route `properties` rendered through `src/layouts/main.html`
(LWR's config-driven layout mechanism), and `CNAME`/`.nojekyll` are declared as
assets sourced from `src/` — all of it is regenerated correctly on every build,
so there's nothing to hand-edit or preserve in the build output afterward.

## Unit Testing

This project utilises the jest testing framework, and enforces at least 70% coverage. Each component should contain a `__tests__` subdirectory, with relevant unit tests for the component.

Run the unit tests and check coverage requirements:

```bash
yarn test:unit:coverage
```
