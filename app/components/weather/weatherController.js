(function() {
  var app = angular.module('weather', []);

  app.controller('WeatherController', function() {
    this.forecast = 'sunny!';
  });
})();
