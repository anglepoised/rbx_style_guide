/**
 * Base Protractor config. Not used directly in any testing environment but is
 * extended by the functional and integration test configs.
 */

exports.config = {
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    }],
    suites: {
        all: 'tests/js/functional/**/*.spec.js',
        app: 'tests/js/functional/*.spec.js'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};
