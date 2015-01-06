rbx_style_guide
===============

## Prerequisites

* [Node](http://nodejs.org/)
* [Gulp](http://gulpjs.com/)

## Getting started

* Install Gulp globally with `npm install -g gulp`.
* Install with `npm install`.
* Run `gulp watch`.

## Browser support

The following browsers are currently supported:

* IE10+ (Win7+)
* Chrome Desktop last two (OS X, Ubuntu & Windows)
* Firefox Desktop last two (OS X, Ubuntu & Windows)
* Safari 7.1+ (OS X Mavericks+)
* Safari 7.1+ (iOS iPad) (MVP: flag don't fix)
* Chrome for Android 37 (Android Lollipop) (MVP: flag don't fix)

Autoprefixer is configured to use this list.

## HTML and CSS

Use [.editorconfig](http://editorconfig.org/) for consistent formatting styles across file formats.

### Styleguide

Adhere to the [SuitCSS HTML and CSS styleguide](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

TODO: This needs forking and tweaking to match Rockabox in-house style. But it's an excellent start.

### Architecture

Follow the [SuitCSS design principles](https://github.com/suitcss/suit/blob/master/doc/design-principles.md) and use the [SuitCSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

### Naming of descendants

Keep the naming of descendants consistent across components:

* Use `inner` rather than `wrapper` if an extra element is needed.
* Use `title`, `subTitle` and `body` (rather than `heading` and `content`) to delineate the main content.
* Use `content` to wrap content only when the component also contains presentational mark-up.
* Use `summary` and `details` for revealed content.
* Use `items` for collections.
* Use `item` for elements within a collection.
* Use `media` for images and video.
* Use `<sub component name>` to wrap sub components.

#### Example

```html
<section class="ComponentName">
  <div class="ComponentName-inner">
    <div class="ComponentName-content">
      <div class="ComponentName-summary">
        <div class="ComponentName-audioPlayer" data-region="audio-player"></div>
          <h1 class="ComponentName-title">{{title}}</h1>
          <img alt="{{alt}}" class="ComponentName-media" src="{{src}}">
        </div>
        <div class="ComponentName-details">
          <p class="ComponentName-body">{{body}}</p>
          <div class="ComponentName-button">
            <button class="Button Button--primary">{{link}}</button>
          </div>
        </div>
      </div>
      <ul class="ComponentName-items">
        <li class="ComponentName-item"><a href="ComponentName-itemInner">{{link}}</a></li>
        <li class="ComponentName-item"><a href="ComponentName-itemInner">{{link}}</a></li>
      </ul>
    </div>
    <div class="ComponentName-pulse">
      <span class="ComponentName-pulseItem"></span>
      <span class="ComponentName-pulseItem"></span>
    </div>
  </div>
</section>
```

### Polyfiller and postprocessor

Use [PostCSS](https://github.com/postcss/postcss) as a polyfiller for the following CSS specifications:

* [CSS Custom Media Queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq).
* [CSS Custom Properties for Cascading Variables Module](http://dev.w3.org/csswg/css-variables/).
* [CSS Values and Units Module (calc notation)](http://www.w3.org/TR/css3-values/#calc-notation).
* [CSS Color Module Level 4 (color() function)](http://dev.w3.org/csswg/css-color/#modifying-colors).
* [CSS Color Module Level 4 (gray() function)](http://dev.w3.org/csswg/css-color/#grays).

Use [PostCSS](https://github.com/postcss/postcss) to inline CSS files.

Use [Autoprefixer](https://github.com/postcss/autoprefixer) (as a postcss plugin) to handle vendor prefixes.

### Colours

Use [RGBa](https://docs.webplatform.org/wiki/css/color#RGBA_Notation) to define colours.

Colours are first defined as descriptive colours e.g. `white-alabaster`, then as functional colours that reference descriptive colours e.g. `--colour-brand-green`.

Avoid referencing descriptive colours in rulesets.

Avoid adding new descriptive colours if possible.

### Units

As this project doesn't support oldIE, fonts can be sized with `rem` units. If oldIE support is ever required, post-process with [node-pixrem](https://github.com/robwierzbowski/node-pixrem)

Use `em` where you need something to scale with the font size of the component, `rem` for something that scales with the base font-size and `px` where you need an absolute value that doesn't depend on the font size.

### Typography

The primary font, Maven Pro, does not have an italic style, so avoid the use of italics. Italic styles have been disabled in CSS to prevent browsers rendering ugly faux-italics.

### CSS Sourcemaps

All working. Set up Chrome properly and you can edit CSS directly in DevTools.

TODO: Document CSS sourcemaps.

### Utility classes

Once made and used once, they cannot *ever* be amended or removed. Make new ones as necessary, but ensure they can be used for as long as you can possibly imagine as they will sit in the CSS of the project for EVER.

## Images

All SVG, all the time. Save SVG images at 1x resolution, NOT 2x or 3x.

TODO: Document SVG sprite tool.

## JavaScript

TBC
