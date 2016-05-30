/*'use strict';
 
angular.module('fullstackIatnzApp')
.factory('ArticleService', function($resource){

	return $resource(             //$resource(url, paramDefaults, actions)
		'/api/articleses/:id',{id:'@id'},               //paramDefaults
		{ update: { method: 'PUT'}

		
		 ,delete: { method: 'DELETE',
            		headers: {'Content-Type': 'application/json'},
            		params: {id: 'id'} 
            	  }
		

        }// this method issues a PUT request
   );
})
*/
/*
'use strict';
    angular.module('achievementApp').factory('tasks', function($resource){
        return $resource('http://localhost:3000/tasks/',{_id: '@_id'},{
        get: {method:'GET', isArray: true},
        add: {method:'POST'},
        delete: {method: 'DELETE'}
    });
});
*/


'use strict';

angular.module('fullstackIatnzApp')
  .factory('ArticleService', function($resource) {
    return $resource('/api/articleses/:id',{
        id: '@id'
      });
});
