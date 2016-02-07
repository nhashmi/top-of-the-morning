(function() {
  var app = angular.module('topOfTheMorning', ['weather', 'npr', 'nyt', 'reddit', 'nprFilters']);

  app.controller('AppController', function() {
    this.date = Date.now();
    this.user = {
      firstName: 'Sarah'
    }
  });
})();
