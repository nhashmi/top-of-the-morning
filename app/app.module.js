(function() {
  var app = angular.module('topOfTheMorning', ['weather', 'npr', 'nyt', 'reddit']);

  app.controller('AppController', function() {
    this.date = Date.now();
  });
})();
