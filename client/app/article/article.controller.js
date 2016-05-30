'use strict';

angular.module('fullstackIatnzApp')
  .controller('ArticleCtrl', function ($scope,$stateParams,ArticleService) {
    
    ArticleService.get({id: $stateParams.id},function(article){
    	$scope.article=article;
    });

  });
