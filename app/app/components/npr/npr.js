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
    npr.topStories = {};
    npr.healthStories = {};
    npr.econStories = {};
    $scope.currentStory = '';
    $scope.player = {
      url: $sce.trustAsResourceUrl(npr.currentStory)
    }

    $scope.expandStory = function(story) {
      console.log(!story.expanded);
      story.expanded = !story.expanded;
    }

    $scope.playStory = function(story) {
      story.played = true;
      var audio = story.audio[0].format.mp3[0].$text;
      $scope.currentStory = $sce.trustAsResourceUrl(audio);
      console.log('current story is:,', $scope.currentStory);
    }

    $http.get('/npr/top').then(function(res) {
      var allStories = res.data.stories.story;
      function hasAudio(story) {
        return story.audio;
      }
      var audioStories = allStories.filter(hasAudio);
      console.dir(audioStories);
      npr.topStories = audioStories;
    });

    $http.get('/npr/health').then(function(res) {
      var allStories = res.data.stories.story;
      function hasAudio(story) {
        return story.audio;
      }
      var audioStories = allStories.filter(hasAudio);
      console.dir(audioStories);
      npr.healthStories = audioStories;
    });

    $http.get('/npr/econ').then(function(res) {
      var allStories = res.data.stories.story;
      function hasAudio(story) {
        return story.audio;
      }
      var audioStories = allStories.filter(hasAudio);
      console.dir(audioStories);
      npr.econStories = audioStories;
    });

  }]);
})();
