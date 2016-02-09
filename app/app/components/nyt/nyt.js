(function() {
  var app = angular.module('nyt', []);

  app.controller('NytController', ['$http', '$scope', function($http, $scope) {
    var nyt = this;
    nyt.homeStories = {};
    nyt.healthStories = {};

    $scope.homeExpanded = false;
    $scope.healthExpanded = false;

    $scope.expandHome = function() {
      $scope.homeExpanded = !$scope.homeExpanded;
    }

    $scope.expandHealth = function() {
      $scope.healthExpanded = !$scope.healthExpanded;
    }

    $http.get('/nyt/home').then(function(res) {
      var stories = res.data.stories.results;
      nyt.homeStories = stories;
    });

    $http.get('/nyt/health').then(function(res) {
      var stories = res.data.stories.results;
      nyt.healthStories = stories;
    });
  }]);
})();
