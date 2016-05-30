'use strict';
 
angular.module('fullstackIatnzApp')
.factory('GetarticleService', function($resource){
return $resource('http://pre.app.nzinfo.cn/index.php/article/detail/',
				 {},
				 {
					findRange:{method: 'GET', params:{id:'@id'/'@debug'}}
				 }
				);
})
/*
return $resource('http://pre.app.nzinfo.cn/index.php/article/detail/',
				 {},
				 {
					findRange:{method: 'GET', params:{id:'@id'/'@debug'}}
				 }
				);
})
*/
/*
.factory('CommentService', function($resource){
return $resource('http://pre.app.nzinfo.cn/index.php/article/comment/list/',
				 {},
				 {
					findRange:{method: 'GET', params:{id:'@s'/'@n'/'@article_id'}}
				 }
				);
})
*/


/*
up vote
3
down vote
accepted
You need to set up the entity ID in your template:

var entityResource = $resource('/api/:entityType/:entityId', 
                               {type:'@entityType', id: '@entityId'});
Then when you call it, pass in the parameters:

entityResource.delete({type: $scope.entityType, id: entityId}, success, failure);
or

var entity = new entityResource({type: $scope.entityType, id: entityId});
entity.$delete(success, failure);
assuming that success and failure look loke this:

var success = function (result) {
    $scope.remove($scope.grid.data, idColumn, entityId);
};

var failure = function (result) {
    alert("Error: " + result);
};
*/