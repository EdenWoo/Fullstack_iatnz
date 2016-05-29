
'use strict';
 
angular.module('fullstackIatnzApp')
.controller('GetDemoDataCtrl', function ($scope, $interval, GetarticleService,ArticleService) {


    $scope.addarticles=function(){

    var i=1;
	$interval(function () {
    		console.log("add button clicked"+i);
    		i=i+1;
    		
    		$scope.articles = GetarticleService.findRange({id:i, debug:1});

    		GetarticleService.findRange({id:i, debug:1},function(){

				if ($scope.articles.item) {
						 // items have value
					
					    ArticleService.save($scope.articles,function(articles){
				    		console.log(articles);
				    		console.log(i);
						});
				}			 
    		});
	  }, 2000);
    }
});