define([
    '../src/assets/styles/core.css'
], function (baseCss) {
    /**
     * This code is just for angular instantiation testing purposes
     * Set to change in coming tasks.
     *
     * @ngInject
     */
    var app = angular
        .module('app', [
        ]).run(function ($rootScope) {
            $rootScope.title = 'RBX Style Guide';
        }).controller('mainCtrl', function () {
            this.message = 'rbx_style_guide angularified';
        });

    return app;
});
