(function() {
  var app = angular.module('nyt', []);

  app.controller('NytController', ['$http', '$scope', function($http, $scope) {
    var nyt = this;
    nyt.homeStories = {};
    nyt.healthStories = {};

    nyt.expanded = false;
    $scope.homeExpanded = false;
    $scope.healthExpanded = false;

    nyt.expand = function() {
      this.expanded = !this.expanded;
    }

    $scope.expandHome = function() {
      $scope.homeExpanded = !$scope.homeExpanded;
    }

    $scope.expandHealth = function() {
      $scope.healthExpanded = !$scope.healthExpanded;
    }

    $scope.homeFetched = false;
    $scope.healthFetched = false;

    $scope.getHome = function() {
      if ($scope.homeFetched) {
        return false;
      } else {
        $http.get('/nyt/home').then(function(res) {
          $scope.homeFetched = true;
          var stories = res.data.stories.results;
          nyt.homeStories = stories;
        });
      }
    }

    $scope.getHealth = function() {
      if ($scope.healthFetched) {
        return false;
      } else {
        $http.get('/nyt/health').then(function(res) {
          $scope.healthFetched = true;
          var stories = res.data.stories.results;
          nyt.healthStories = stories;
        });
      }
    }
  }]);
})();
