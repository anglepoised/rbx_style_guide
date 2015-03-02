var gulp = require ('gulp');

gulp.task('styles', function () {

    var gulpIf = require('gulp-if'),
        minifyCSS = require('gulp-minify-css'),
        postcss = require('gulp-postcss'),
        sourcemaps = require('gulp-sourcemaps'),
        paths = {
            src: 'src/assets/styles/*.css',
            dest: 'dist/assets/styles'
        },

        processors = [
            require('postcss-import')({
                path: [
                    'src/assets/styles'
                ]}
            ),
            require('postcss-custom-media')(),
            require('postcss-custom-properties')(),
            require('postcss-color-function')(),
            require('postcss-calc')(),
            require('postcss-media-minmax')(),
            require('postcss-font-variant')(),
            require('autoprefixer-core')({
                remove: false,
                cascade: false
            })
        ];

    return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    })
    .pipe(sourcemaps.write())
    .pipe(gulpIf(isProduction, minifyCSS()))
    .pipe(gulp.dest(paths.dest));

});
