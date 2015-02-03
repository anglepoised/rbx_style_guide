var gulp = require ('gulp');

gulp.task('html', function () {

    var gulpIf = require('gulp-if'),
        minifyHTML = require('gulp-minify-html'),
        typogr = require('gulp-typogr'),
        paths = {
            src: 'src/*.html',
            dest: 'dist'
        };

    return gulp.src(paths.src)
    .pipe(typogr({
        only: ['widont', 'smartypants', 'caps']
    }))
    .pipe(gulpIf(isProduction, minifyHTML({
        comments: true,
        quotes: true
    })))
    .pipe(gulp.dest(paths.dest));

});
