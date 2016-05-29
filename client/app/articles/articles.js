'use strict';

angular.module('fullstackIatnzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'app/articles/articles.html',
        controller: 'ArticlesCtrl'
      });
  });
