
'use strict';
 
angular.module('fullstackIatnzApp')
.controller('ArticlesCtrl', function ($scope, ArticleService,socket) {

	$scope.url='';
	$scope.newArticle={};
	$scope.newArticle.item={};
	$scope.newArticle.item.images=[];

	$scope.addArticle=function(){

		$scope.newArticle.item.images.push($scope.url);
		$scope.newArticle.item.images.push("");
		console.log($scope.newArticle);

		ArticleService.save($scope.newArticle,function(article){
			console.log(article);
		});
	}

	$scope.deleteArticle=function(){

	}

	
	ArticleService.query(function(articles){
	 	$scope.articles=articles;
	 	socket.syncUpdates('articles',$scope.articles);
	});

	$scope.$on('$destroy',function(){
		socket.unsyncUpdates('articles');
	});
});