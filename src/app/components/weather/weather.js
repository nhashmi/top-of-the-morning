(function() {
  var app = angular.module('weather', []);

  app.controller('WeatherController', ['$http', function($http) {
    var weather = this;
    weather.forecast = 'Looking out the window...';

    $http.get('/weather').then(function(res) {
      weather.morning = res.data.morning;
      weather.low = res.data.low;
      weather.high = res.data.high;
      weather.description = res.data.description;
    });
  }]);
})();
