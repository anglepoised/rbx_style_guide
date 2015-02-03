var gulp = require ('gulp');

gulp.task('scripts', function () {

    var gulpIf = require('gulp-if'),
        sourcemaps = require('gulp-sourcemaps'),
        uglify = require('gulp-uglify'),

        paths = {
            src: 'src/assets/scripts/*.js',
            dest: 'dist/assets/scripts'
        };

    return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    })
    .pipe(sourcemaps.write())
    .pipe(gulpIf(isProduction, uglify()))
    .pipe(gulp.dest(paths.dest));

});
