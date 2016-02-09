var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    weather = require('./routes/weather'),
    npr = require('./routes/npr'),
    nyt = require('./routes/nyt'),
    reddit = require('./routes/reddit');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/app')));

app.get('/', routes.index);

app.listen(process.env.PORT || 5000);

// JSON API

app.get('/weather', weather.today);
app.get('/npr/top', npr.top);
app.get('/npr/health', npr.health);
app.get('/npr/econ', npr.econ);
app.get('/nyt/home', nyt.home);
app.get('/nyt/health', nyt.health);
app.get('/reddit', reddit.relationships);
