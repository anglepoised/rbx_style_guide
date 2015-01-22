var gulp = require ('gulp'),
    cheerio = require ('gulp-cheerio'),
    merge = require('merge-stream'),
    path = require('path');

gulp.task('icons', function (callback) {

    var paths = {
            src: 'src/assets/icons/black/*.svg',
            dest: 'dist/tmp/icons/'
        },
        tasks;

    tasks = iconColoursList.map(function (colour) {
        return gulp.src(paths.src)
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').attr('fill', colour.code);
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(gulp.dest(path.join(paths.dest, colour.name)));
    });

    return merge(tasks);
});
