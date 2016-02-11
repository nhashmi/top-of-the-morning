(function() {
  var app = angular.module('npr', []);

  app.directive('nprPlayer', function() {
    return {
      restrict: 'E',
      templateUrl: './app/components/npr/npr-player.html'
    }
  });

  app.controller('NprController', ['$http', '$scope', '$sce', function($http, $scope, $sce) {
    var npr = this;
    npr.expanded = false;
    npr.topExpanded = false;
    npr.healthExpanded = false;
    npr.econExpanded = false;
    npr.topStories = {};
    npr.healthStories = {};
    npr.econStories = {};

    npr.expand = function() {
      npr.expanded = !npr.expanded;
    }

    npr.expandTop = function() {
      npr.topExpanded = !npr.topExpanded;
    }

    npr.expandHealth = function() {
      npr.healthExpanded = !npr.healthExpanded;
    }

    npr.expandEcon = function() {
      npr.econExpanded = !npr.econExpanded;
    }

    $scope.currentStory = '';
    $scope.player = {
      url: $sce.trustAsResourceUrl(npr.currentStory)
    }

    $scope.expandStory = function(story) {
      story.expanded = !story.expanded;
    }

    $scope.playStory = function(story) {
      story.played = true;
      var audio = story.audio[0].format.mp3[0].$text;
      $scope.currentStory = $sce.trustAsResourceUrl(audio);
    }

    $scope.nprTopFetched = false;
    $scope.nprHealthFetched = false;
    $scope.nprEconFetched = false;

    $scope.getTopStories = function() {
      if ($scope.nprTopFetched) {
        return false;
      } else {
        $http.get('/npr/top').then(function(res) {
          $scope.nprTopFetched = true;
          var allStories = res.data.stories.story;
          function hasAudio(story) {
            return story.audio;
          }
          var audioStories = allStories.filter(hasAudio);
          npr.topStories = audioStories;
        });
      }
    }


    $scope.getHealthStories = function() {
      if ($scope.nprHealthFetched) {
        return false;
      } else {
        $http.get('/npr/health').then(function(res) {
          $scope.nprHealthFetched = true;
          var allStories = res.data.stories.story;
          function hasAudio(story) {
            return story.audio;
          }
          var audioStories = allStories.filter(hasAudio);
          npr.healthStories = audioStories;
        });
      }
    }

    $scope.getEconStories = function() {
      if ($scope.nprEconFetched) {
        return false;
      } else {
        $http.get('/npr/econ').then(function(res) {
          $scope.nprEconFetched = true;
          var allStories = res.data.stories.story;
          function hasAudio(story) {
            return story.audio;
          }
          var audioStories = allStories.filter(hasAudio);
          npr.econStories = audioStories;
        });
      }
    }
  }]);
})();
