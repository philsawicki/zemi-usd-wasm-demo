# Zemí USD experience

> Demonstration experience of the Zemí artifact from the MET using a WebAssembly build of Pixar's USD.

## About

This project is a demonstration web experience of the [Zemí artifact provided by the MET](https://www.metmuseum.org/blogs/collection-insights/2020/augmented-reality-zemi-arte-del-mar), using a WebAssembly build of USD.

Head to [https://philsawicki.github.io/zemi-usd-wasm-demo](https://philsawicki.github.io/zemi-usd-wasm-demo) experience the live project, and use the <kbd>W</kbd>,  <kbd>A</kbd>,<kbd>S</kbd>,<kbd>D</kbd>, or arrow keys of the keyboard along with dragging the mouse cursor to navigate the environment.

To open the inspector, and interactively edit the scene, press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>I</kbd>.

## Building

### Requirements

 * [NodeJS](https://nodejs.org)

### Scripts

The following scripts are available for building the experience:

 * `npm run build` to build the experience from the available sources.
 * `npm run serve` to serve the experience using a local web server hosted at http://localhost:3003
 * `npm run deploy` to publish the experience to GitHub Pages.
