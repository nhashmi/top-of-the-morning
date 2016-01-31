var http = require('http');

exports.today = function(req, res) {
  res.json({
    forecast: 'warm and sunny!'
  });
}
