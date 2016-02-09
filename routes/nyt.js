var http = require('http');
// Load vars from .env in development
if ((process.env.NODE_ENV || 'development') === 'development') {
  require('dotenv').config();
}
var options = {
  host: 'api.nytimes.com',
  port: '80',
  path: '/svc/topstories/v2/home.json?api-key=' + process.env.NYT_API_KEY
}

var healthOptions = {
  host: 'api.nytimes.com',
  port: '80',
  path: '/svc/topstories/v2/health.json?api-key=' + process.env.NYT_API_KEY
}

var stories = '';
var healthStories = '';

http.get(options, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    stories = JSON.parse(body);
    return stories;
  });
});

http.get(healthOptions, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    healthStories = JSON.parse(body);
    return healthStories;
  });
});

exports.home = function(req, res) {
  res.json({
    stories: stories
  });
}

exports.health = function(req, res) {
  res.json({
    stories: healthStories
  });
}
