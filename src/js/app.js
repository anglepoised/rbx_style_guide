/**
 * This code is just for angular instantiation testing purposes
 * Set to change in coming tasks.
 */
angular
    .module('app', ['hljs']).run(function ($rootScope) {
        $rootScope.title = 'RBX Style Guide';
    }).controller('mainCtrl', function () {
        this.message = 'rbx_style_guide angularified';
    });
