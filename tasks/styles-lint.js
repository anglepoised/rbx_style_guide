var gulp = require ('gulp');

gulp.task('styles:lint', function () {

    var cached = require('gulp-cached'),
        postcss = require('gulp-postcss'),
        paths = {
            src: 'src/assets/styles/components/*.css'
        },
        processors = [
            require('postcss-bem-linter')()
        ];

    return gulp.src(paths.src)
    .pipe(cached('styles'))
    .pipe(postcss(processors))
    .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    });

});
