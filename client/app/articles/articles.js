'use strict';

angular.module('fullstackIatnzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/',
        templateUrl: 'app/articles/articles.html',
        controller: 'ArticlesCtrl'
      });
  });
