var gulp = require ('gulp');

gulp.task('raw', function () {

    var paths = {
        src: [
        'src/.*',
        'src/**/*.*',
        '!src/**/*.html',
        '!src/js/**/*.js',
        '!src/assets/icons/**/*.*',
        '!src/assets/scripts/**/*.*',
        '!src/assets/styles/**/*.*'
        ],
        dest: 'dist'
    };

    return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest));

});
