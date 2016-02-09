(function() {
  var app = angular.module('topOfTheMorning', ['weather', 'npr', 'nyt', 'nprFilters', 'ngSanitize']);

  app.controller('AppController', function() {
    this.date = Date.now();
    this.user = {
      firstName: 'Sarah'
    }
  });
})();
