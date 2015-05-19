define([
    'angular-ui-router',
    'html!./demo.html',
    'components/rb-badge/demo',
    'components/rb-button/demo',
    'components/rb-currency/demo',
    'components/rb-datetime/demo',
    'components/rb-footer/demo',
    'components/rb-header/demo',
    'components/rb-loading/demo',
    'components/rb-login-form/demo',
    'components/rb-main/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-ratio/demo',
    'components/rb-site/demo',
    'components/rb-system-message/demo',
    'components/rb-text-control/demo',
    'components/rb-warning-messages/demo',
    'rb-table/src/demo',
    '../src/assets/styles/core.css'
], function (uiRouter, template, rbBadgeDemo, rbButtonDemo, rbCurrencyDemo, rbDateTimeDemo, rbFooterDemo, rbHeaderDemo,
    rbLoadingDemo, rbLoginFormDemo, rbMainDemo, rbPageHeaderDemo, rbPageTitleDemo, rbRatioDemo, rbSiteDemo,
    rbSystemMessage, rbTextControlDemo, rbWarningMessages, rbTableDemo, baseCss) {
    /**
     * This code is just for angular instantiation testing purposes
     * Set to change in coming tasks.
     *
     * @ngInject
     */
    var app = angular
        .module('app', [
            'ui.router',
            rbBadgeDemo.name,
            rbButtonDemo.name,
            rbCurrencyDemo.name,
            rbDateTimeDemo.name,
            rbFooterDemo.name,
            rbHeaderDemo.name,
            rbLoadingDemo.name,
            rbLoginFormDemo.name,
            rbMainDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbRatioDemo.name,
            rbSiteDemo.name,
            rbSystemMessage.name,
            rbTextControlDemo.name,
            rbWarningMessages.name,
            rbTableDemo.name
        ])
        .run(function ($rootScope) {
            $rootScope.title = 'RBX Style Guide';
        })
        .config(function ($stateProvider, $httpProvider) {
            // App State
            $stateProvider.state({
                name: 'app',
                url: '/',
                template: template,
                controller: function ($scope, $state) {
                    $scope.states = $state.get();
                }
            });
        })
        .config(function ($urlRouterProvider, $locationProvider) {
            // Turn on HTML5 pushState routes if available
            $locationProvider.html5Mode(true);

            // Show the error page if a route isn't matched
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('app');
            });
        })
        .controller('mainCtrl', function () {
            this.message = 'rbx_style_guide angularified';
        });

    return app;
});
