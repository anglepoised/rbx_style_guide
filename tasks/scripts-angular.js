var gulp = require ('gulp'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('scripts:angular', function (cb) {

    var angularModule = ['vendor/angular/angular.js'],
        vendorFiles = ['vendor/angular-animate/angular-animate.js',
                       'vendor/angular-aria/angular-aria.js',
                       'vendor/angular-messages/angular-messages.js',
                       'vendor/angular-resource/angular-resource.js',
                       'vendor/angular-sanitize/angular-sanitize.js',
                       'vendor/angular-touch/angular-touch.js',
                       'vendor/angular-ui-router/release/angular-ui-router.js',
                       'vendor/ng-lodash/build/ng-lodash.js',
                       'vendor/ng-wrap/ng-wrap.js',
                       'vendor/highlightjs/highlight.pack.js',
                       'vendor/angular-highlightjs/angular-highlightjs.js'],
        jsFiles = ['src/js/**/*.js'],
        paths = {
            dest: 'dist/js'
        };

    return gulp.src(angularModule.concat(vendorFiles).concat(jsFiles))
     .pipe(ngAnnotate({'single_quotes': true}))
     .pipe(gulpIf(isProduction, uglify()))
     .pipe(concat('main.js'))
     .pipe(gulp.dest(paths.dest));

});
