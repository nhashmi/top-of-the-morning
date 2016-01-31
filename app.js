var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    weather = require('./routes/weather');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/app')));

app.get('/', routes.index);

console.log('Listening on port 3000');
app.listen(3000);

// JSON API

app.get('/weather', weather.today);
