var gulp = require ('gulp');

gulp.task('cleandist', ['spriting'], function (cb) {

    var del = require('del'),
        paths = {
            tmp: 'dist/tmp'
        };

    del(paths.tmp, cb);
});
