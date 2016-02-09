(function() {
  var app = angular.module('reddit', []);

  app.controller('RedditController', ['$http', function($http) {
    var reddit = this;
    this.posts = 'reddit!';

    reddit.expanded = false;

    reddit.expand = function() {
      reddit.expanded = !reddit.expanded;
    }

    $http.get('/reddit').then(function(res) {
      reddit.posts = res.data;
      console.log(res.data);
    });

  }]);
})();
