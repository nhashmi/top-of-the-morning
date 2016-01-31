(function() {
  var app = angular.module('weather', []);

  app.controller('WeatherController', ['$http', function($http) {
    var weather = this;
    weather.forecast = 'Looking out the window...';

    $http.get('/weather').then(function(res) {
      weather.forecast = res.data.forecast;
    });
  }]);
})();
