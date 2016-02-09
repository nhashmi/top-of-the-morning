var http = require('http');
// Load vars from .env in development
if ((process.env.NODE_ENV || 'development') === 'development') {
  require('dotenv').config();
}
var options = {
  host: 'api.openweathermap.org',
  port: '80',
  path: '/data/2.5/forecast/daily?lat=39.9500&lon=-75.1667&cnt=3&appid=' + process.env.OPEN_WEATHER_API_KEY+ '&units=imperial'
}
var todaysForecast = '';

http.get(options, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    todaysForecast = JSON.parse(body);
    return todaysForecast;
  });
});

exports.today = function(req, res) {
  var temp = todaysForecast.list[0].temp;
  res.json({
    morning: temp.morn,
    low: temp.min,
    high: temp.max,
    description: todaysForecast.list[0].weather[0].description
  });
}
