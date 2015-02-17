var gulp = require('gulp'),
    read = require('read-yaml');

gulp.task('deploy', function () {

    var env = read.sync('env.yml'),
        awspublish = require('gulp-awspublish'),
        publisher = awspublish.create({
            region: env.RBX_AWS_STYLEGUIDE_REGION,
            bucket: env.RBX_AWS_STYLEGUIDE_BUCKET_NAME,
            key: env.RBX_AWS_ACCESS_KEY,
            secret: env.RBX_AWS_SECRET_ACCESS_KEY
        }),
        headers = {};

    return gulp.src('./dist/**')
        .pipe(publisher.publish(headers))
        .pipe(publisher.cache())
        .pipe(awspublish.reporter());
});
