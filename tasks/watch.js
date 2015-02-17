var gulp = require ('gulp');

gulp.task('watch', ['default'], function () {

    var browserSync = require('browser-sync'),
        compression = require('compression'),
        reload = browserSync.reload,
        paths = {
            dist: 'dist',
            srcHtml: 'src/**/*.html',
            srcIcons: 'src/assets/icons/**/*.{svg}',
            srcStyles: 'src/assets/styles/**/*.css',
            srcStylesLint: 'src/assets/styles/components/**/*.css',
            srcScripts: 'src/assets/scripts/**/*.js',
            srcScriptsLint: [
            'gulpfile.js',
            'tasks/*.js',
            'src/assets/scripts/**/*.js'
            ]};

    // start browser sync server
    browserSync({
        open: false,
        server: {
            baseDir: paths.dist,
            middleware: compression()
        }
    });

    // watch src gulp tasks and trigger reload
    gulp.watch(paths.srcHtml, {interval: 500}, ['html', 'html:lint', reload]);
    gulp.watch(paths.srcIcons, {interval: 500}, ['icons', reload]);
    gulp.watch(paths.srcScripts, {interval: 500}, ['scripts', reload]);
    gulp.watch(paths.srcScriptsLint, {interval: 500}, ['scripts:lint']);
    gulp.watch(paths.srcStyles, {interval: 500}, ['styles', reload]);
    gulp.watch(paths.srcStylesLint, {interval: 500}, ['styles:lint']);

});
