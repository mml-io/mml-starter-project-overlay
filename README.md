# MML Starter Project Overlay

A simple UI overlay used by the [MML Starter Project](https://github.com/mml-io/mml-starter-project)
that provides quick access to key MML resources and project sharing.

## Usage

```bash
npm install @mml-io/mml-starter-project-overlay
```

Including `@mml-io/mml-starter-project-overlay/dist/index.js` as a script within your project to
automatically inject the overlay UI.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

Running `npm run build` will produce the `dist` directory.

## Publishing

To publish a new version of the package, update the `version` field in `package.json` and run
`npm run npm-publish`.
