var express = require('express');
var app = express();
var server = app.listen(6789);


// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/'));

require('./server/config/routes.js')(app);
