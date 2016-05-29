'use strict';

angular.module('fullstackIatnzApp.auth', [
  'fullstackIatnzApp.constants',
  'fullstackIatnzApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
