/*
* This code is just for angular instantiation testing purposes
* Set to change in coming tasks.
*/
angular
    .module('app', ['hljs']).run(function ($rootScope) {
        $rootScope.title = 'rbx_style_guide';
    }).controller('mainCtrl', function () {
        this.message = 'rbx_style_guide angularified';
    });
