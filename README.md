# LWR Portfolio Site

This simple LWR Application serves as my portfolio website.

## Project Setup

The directory structure looks like this:

```
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  |   └── favicon.ico
  └── modules/          // lwc modules
      └── base/         // base level components and app content
          └── *
      └── ui/           // front-end components
          └── *
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project.

```json
// lwr.config.json
{
	"lwc": { "modules": [{ "dir": "$rootDir/src/modules" }] },
	"routes": [
		{
			"id": "base",
			"path": "/",
			"rootComponent": "base/app"
		}
	],
	"assets": [
		{
			"alias": "assetsDir",
			"dir": "$rootDir/src/assets",
			"urlPath": "/public/assets"
		},
		{
			"alias": "favicon",
			"file": "$rootDir/src/assets/favicon.ico",
			"urlPath": "/favicon.ico"
		}
	]
}
```

## Running the Project in dev Mode

```bash
yarn install
yarn dev # dev:compat for AMD format
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Statically Generate and Preview the Site

```bash
yarn build # dev:prod-compat for AMD format
yarn start
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Publishing Changes to GitHub Pages

This application is served on GitHub pages. It will serve the build in the `docs/` directory in the `main` branch.

Create a new build of the app (see below), and move the output into the `docs/` directory.

```bash
yarn build:prod-compat
```
