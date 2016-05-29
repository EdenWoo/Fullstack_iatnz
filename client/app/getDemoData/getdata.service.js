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