<img alt="cupcake-logo" src="http://funkyimg.com/i/2KN2G.png" width="350">

[![CodeFactor](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake-layouts/badge)](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake-layouts)


# Cupcake 2.0 Layouts UNDER DEVELOPMENT

This repository includes everything you need to build, customize, test, and deploy Cupcake.

## List of packages used
[autoprefixer](https://github.com/postcss/autoprefixer), [browser-sync](https://github.com/Browsersync/browser-sync), [node-sass](https://github.com/sass/node-sass), [onchange](https://github.com/Qard/onchange), [npm-run-all](https://github.com/mysticatea/npm-run-all), [postcss-cli](https://github.com/code42day/postcss-cli),[uglify-js](https://github.com/mishoo/UglifyJS2).



## List of available tasks

### `autoprefixer`
  `postcss -u autoprefixer -r dist/css/*`

  Add vendor prefixes to your CSS automatically

### `scss`
  `node-sass --output-style compressed -o dist/css src/scss`

  Compile Scss to CSS


### `serve`
  `browser-sync start --server --files 'dist/css/*.css, dist/js/*.js, **/*.html, !node_modules/**/*.html'`

  Start a new server and watch for CSS & JS file changes in the `dist` folder

### `build:css`
  `run-s scss autoprefixer`

  Alias to run the `scss` and `autoprefixer` tasks. Compiles Scss to CSS & add vendor prefixes
  

### `build`
  `run-s build:*`

  Alias to run all of the `build` commands

### `watch:css`
  `onchange 'src/**/*.scss' -- run-s build:css`

  Watches for any .scss file in `src` to change, then runs the `build:css` task


### `watch`
  `run-p serve watch:*`

  Run the following tasks simultaneously: `serve`, `watch:css`, `watch:js` & `watch:images`. When a .scss or .js file changes in `src` or an image changes in `src/images`, the task will compile the changes to `dist`, and the server will be notified of the change. Any browser connected to the server will then inject the new file from `dist`

### `get-tokens`
  `run-s get-tokens`

  Retrieve tokens from node_modules

### `postinstall`
  `run-s get-tokens`

  Runs `get-tokens` after `npm install` is finished


