var express = require('express');
var request = require('request');
var responseParser = require('./responseParser');

var app = express();
app.use('/', express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/search', function(req, res) {
    var options = { 
        url: 'https://www.google.co.uk/search?q=' + req.query.q,
        headers: {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/41.0.2272.76 Chrome/41.0.2272.76 Safari/537.36',
            'accept': 'text/html'
        }
    };
    request.get(options, function (err, response, body) { 
        var results = responseParser.parse(body);
        res.send(results); 
    });
});

module.exports = app;
