(function() {
  describe('my app module', function() {
    beforeEach(module('myApp'));
    
    it('should create a module myApp', function() {
      expect(angular.module('myApp')).toBeDefined();
    });
    
    it('should create a version Constant', function() {
      var version;
      // see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
      inject(function(VERSION) {
        version = VERSION;
      });
      expect(version).toBe('1.0');
    });
  });
})();