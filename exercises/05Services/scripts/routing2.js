/*(function () {
  angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/video");
    //
    // Now set up the states
    $stateProvider.state('video', {
      url: "/video",
      templateUrl: "templates/video.html",
      controller: 'SearchController as searchController'
    })
      
      .state('video.list', {
      url: "/list/:query",
      templateUrl: "templates/video.list.html",
      resolve: {
        videos: function(videoService, $stateParams) {
          return videoService.getVideos($stateParams.query);
        }
      },
      controller: 'VideoListController as list'
    });    
  })
})();*/