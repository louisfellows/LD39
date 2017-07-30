var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/lib',express.static(__dirname + '/lib'));

// set the home page route
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});



