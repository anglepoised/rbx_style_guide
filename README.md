# RBX Style Guide

[![Circle CI](https://circleci.com/gh/rockabox/rbx_style_guide.svg?style=shield&circle-token=3025f8d21ea5b4518eff75aef1ce8c128097d0ec)](https://circleci.com/gh/rockabox/rbx_style_guide)

This project is an angular website, compiled by [Gulp](http://gulpjs.com/).

## Dependencies

* [Git](http://git-scm.com)
* [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* [Gulp](http://gulpjs.com/): `npm install -g gulp`.
* [Bower](http://bower.io): `npm install -g bower`.

## Getting started

* Install git: (http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Checkout the repo: `git clone git@github.com:rockabox/rbx_style_guide && cd rbx_style_guide`
* Install project dependencies: `npm install`.
* Install bower packages: `bower install`.
* Run `gulp watch`. (For production environment run `gulp watch --production`)
* Browse to: <http://localhost:3000/>

## Tests

* [pa11y](https://github.com/nature/pa11y/): tests build against [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) AA. Currently excludes tests for sufficient contrast.
* [colorguard](https://github.com/SlexAxton/css-colorguard): warns when colours in CSS are too similar to ones that already exist.
* [PostCSS BEM Linter](https://github.com/necolas/postcss-bem-linter/): tests CSS for conformance against SuitCSS/BEM conventions. Currently using "strict" mode.
* [HTMLHint](https://github.com/yaniswang/HTMLHint/): lints and validates HTML. Currently using default ruleset.
