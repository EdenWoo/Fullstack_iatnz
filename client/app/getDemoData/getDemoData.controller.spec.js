'use strict';

describe('Controller: GetDemoDataCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackIatnzApp'));

  var GetDemoDataCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetDemoDataCtrl = $controller('GetDemoDataCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
