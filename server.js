var express 		  = require('express'),
    cors 			    = require('cors'),
    errorHandler 	= require('errorhandler'),
    dotenv 			  = require('dotenv'),
    bodyParser 		= require('body-parser'),
    logger        = require('morgan');

var app = express();

dotenv.load();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/dist/'));

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorHandler())
}

var port = process.env.PORT || 6789;

var server = app.listen(port, function(err){
	console.log('listening on http://localhost:' + port);
});

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
