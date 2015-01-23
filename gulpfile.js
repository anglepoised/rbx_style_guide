// dependencies
var gulp = require('gulp');
// global variables
iconColoursList = [
            {name: 'black', code: '#000000'},
            {name: 'white-alabaster', code: '#fcfcfc'},
            {name: 'gray-ghost', code: '#c4ccd7'},
            {name: 'gray-tuna', code: '#35353a'},
            {name: 'blue-base', code: '#468ee4'},
            {name: 'green-base', code: '#39be89'},
            {name: 'orange-base', code: '#ed943c'},
            {name: 'red-base', code: '#c24a4a'}
          ];

// load specific tasks
require('require-dir')('tasks');

// default task
gulp.task('default', ['clean'], function (cb) {

    var runSequence = require('run-sequence');

    runSequence([
        'scripts:lint',
        'styles:lint'
    ], [
        'html',
        'icons',
        'raw',
        'scripts',
        'styles',
        'spriting'
    ],
    'html:lint', cb);

});
