'use strict';

angular.module('fullstackIatnzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getDemoData', {
        url: '/getdata',
        templateUrl: 'app/getDemoData/getDemoData.html',
        controller: 'GetDemoDataCtrl'
      });
  });
