var gulp = require ('gulp');

gulp.task('scripts:lint', function () {

    var cached = require('gulp-cached'),
        jscs = require('gulp-jscs'),
        jshint = require('gulp-jshint'),
        paths = {
            src: [
            'gulpfile.js',
            'tasks/*.js',
            'src/assets/scripts/**/*.js',
            'src/js/**/*.js',
            '!src/js/vendor/**/*.js'
            ]
        };

    return gulp.src(paths.src)
    .pipe(cached('scripts'))
    .pipe(jscs())
    .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    })
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});
