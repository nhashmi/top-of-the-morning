var http = require('http');
// Load vars from .env in development
if ((process.env.NODE_ENV || 'development') === 'development') {
  require('dotenv').config();
}
var options = {
  host: 'api.openweathermap.org',
  port: '80',
  path: '/data/2.5/weather?zip=19130,us&appid=' + process.env.OPEN_WEATHER_API_KEY+ '&units=imperial'
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
  res.json({
    temperature: todaysForecast.main.temp,
    low: todaysForecast.main.temp_min,
    high: todaysForecast.main.temp_max,
    description: todaysForecast.weather[0].description
  });
}
