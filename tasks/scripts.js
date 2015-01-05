var gulp = require ('gulp');

gulp.task('scripts', function () {

    var args = require('yargs').argv,
        gulpIf = require('gulp-if'),
        sourcemaps = require('gulp-sourcemaps'),
        uglify = require('gulp-uglify'),

        paths = {
            src: 'src/assets/scripts/*.js',
            dest: 'dist/assets/scripts'
        },
        isProduction = args.type === 'production';

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
