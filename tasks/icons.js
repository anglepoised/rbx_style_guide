var gulp = require ('gulp');

gulp.task('icons', function () {

    var changed = require('gulp-changed'),
        svgSprite = require('gulp-svg-sprite'),
        spriter = {
            mode: {
                css: {
                    prefix: 'Icon-',
                    bust: true, // explictly set for clarity
                    example: true,
                    dimensions: true,
                    dest: '', // we don't need a destination
                    render: {
                        css: true
                    }
                }
            }
        },
        paths = {
            src: 'src/assets/icons/**/*.{svg}',
            dest: 'dist/assets/icons'
        };

    return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(svgSprite(spriter))
    .pipe(gulp.dest(paths.dest));

});
