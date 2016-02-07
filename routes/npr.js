var http = require('http');
require('dotenv').config();
var topOptions = {
  host: 'api.npr.org',
  port: '80',
  path: 'http://api.npr.org/query?id=1002&startNum=5&output=JSON&apiKey=' + process.env.NPR_API_KEY
}
var healthOptions = {
  host: 'api.npr.org',
  port: '80',
  path: '/query?id=1027&startNum=5&output=JSON&apiKey=' + process.env.NPR_API_KEY
}
var econOptions = {
  host: 'api.npr.org',
  port: '80',
  path: '/query?id=1017&startNum=5&output=JSON&apiKey=' + process.env.NPR_API_KEY
}
var topStories = '';
var healthStories = '';
var econStories = '';

http.get(topOptions, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    topStories = JSON.parse(body);
    return topStories;
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
http.get(econOptions, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    econStories = JSON.parse(body);
    return econStories;
  });
});

exports.top = function(req, res) {
  res.json({
    stories: topStories.list
  });
}

exports.health = function(req, res) {
  res.json({
    stories: healthStories.list
  });
}

exports.econ = function(req, res) {
  res.json({
    stories: econStories.list
  });
}
