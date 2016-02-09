var http = require('http');
// Load vars from .env in development
if ((process.env.NODE_ENV || 'development') === 'development') {
  require('dotenv').config();
}

var options = {
  host: 'reddit.com',
  port: '443',
  path: '/r/relationships/hot.json'
}

var posts = '';

http.get(options, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });

  response.on('end', function() {
    console.log(body);
    posts = JSON.parse(body);
    return posts;
  });
});

exports.relationships = function(req, res) {
  res.json({
    posts: posts
  });
}
