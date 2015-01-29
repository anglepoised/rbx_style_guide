// dependencies
var gulp = require('gulp'),
    args = require('yargs').argv;
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
isProduction = args.production;
protractorConfigFile = 'protractor-func.conf.js';
protractorURL = 'http://localhost:';
protractorPort = '3000';

// load specific tasks
require('require-dir')('tasks');

// default task
gulp.task('default', ['clean'], function (cb) {

    var runSequence = require('run-sequence');

    runSequence([
        'scripts:lint',
        'scripts:angular',
        'styles:lint'
    ], [
        'html',
        'icons',
        'raw',
        'scripts',
        'styles',
        'spriting',
        'cleandist'
    ],
    ['html:lint'], cb);

});
