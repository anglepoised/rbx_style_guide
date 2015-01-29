# RBX Style Guide

This project is a static website, compiled by [Gulp](http://gulpjs.com/).

TODO: Revise "This project is.." section after Angular integration.

## Dependencies

* [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* [Gulp](http://gulpjs.com/): `npm install -g gulp`.

## Getting started

* Checkout the repo: `git clone git@github.com:rockabox/rbx_style_guide && cd rbx_style_guide`
* Install project dependencies: `npm install`.
* Run `gulp watch`.
* Browse to: <http://localhost:3000/>

## Tests

* [pa11y](https://github.com/nature/pa11y/): tests build against [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) AA. Currently excludes tests for sufficient contrast.
* [colorguard](https://github.com/SlexAxton/css-colorguard): warns when colours in CSS are too similar to ones that already exist.
* [PostCSS BEM Linter](https://github.com/necolas/postcss-bem-linter/): tests CSS for conformance against SuitCSS/BEM conventions. Currently using "strict" mode.
* [HTMLHint](https://github.com/yaniswang/HTMLHint/): lints and validates HTML. Currently using default ruleset.
