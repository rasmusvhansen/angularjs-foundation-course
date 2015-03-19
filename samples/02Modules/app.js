(function() {
  'use strict';
  // Add app module, add another module, add constant, set properties on rootscope in run
  angular.module('myApp', ['myApp.core']);
  
  angular.module('myApp.core', [])
  .run(function ($rootScope, VERSION) {
    $rootScope.name = 'Knud';
    $rootScope.version = VERSION;
    $rootScope.color = 'red';
  })
  
  .constant('VERSION', '1.0'); 
  
})();