'use strict';

angular.module('fullstackIatnzApp', [
  'fullstackIatnzApp.auth',
  'fullstackIatnzApp.admin',
  'fullstackIatnzApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
