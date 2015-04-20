module.exports = function (grunt) {

    require('load-grunt-config')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', [
        'jshint:json',
        'jshint:src',
        'jscs'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);
};
