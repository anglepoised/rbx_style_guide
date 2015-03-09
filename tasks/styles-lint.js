var gulp = require ('gulp');

gulp.task('styles:lint', function () {

    var cached = require('gulp-cached'),
        colorguard = require('gulp-colorguard'),
        postcss = require('gulp-postcss'),
        scsslint = require('gulp-scss-lint'),
        paths = {
            src: 'src/assets/styles/**/*.css'
        },
        processors = [
            require('postcss-bem-linter')()
        ];

    return gulp.src(paths.src)
    .pipe(cached('styles'))
    .pipe(postcss(processors))
    .pipe(colorguard({ignore: ['#ffffff', '#fcfcfc', '#ffffff', '#f1f4f8']}))
    .pipe(scsslint({'config': '.scss-lint.yml'}))
    .on('error', function (err) {
        console.log(err.plugin, err.message);
        this.emit('end');
    });

});
