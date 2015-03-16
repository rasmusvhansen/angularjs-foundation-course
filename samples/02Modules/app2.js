/*(function () {
    // Add app, add constant, set properties on rootscope in run     
    angular.module('myApp', [])

  .constant('VERSION', '1.0')

  .run(['VERSION', '$rootScope', function(VERSION, $rootScope) {
    $rootScope.version = VERSION;
    $rootScope.name = 'hello there';
    $rootScope.klass = 'red';
  }]);    
})();*/