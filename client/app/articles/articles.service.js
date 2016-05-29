'use strict';
 
angular.module('fullstackIatnzApp')
.factory('ArticleService', function($resource){
	return $resource('/api/articleses/:id',{id:'@id'},{});
})