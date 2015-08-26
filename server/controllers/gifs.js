var Request = require('request');
var giphy_key = require('../keys/giphy_api').key;

module.exports = (function() {
	var rootUrl = 'http://api.giphy.com/v1/gifs/';
	var keyString = '&api_key=' + giphy_key;
	var limit = '&limit=100'

	// Boilerplate function to fire off our api request from the backend using the Request package.
	//Its written with this wrapper so we can define it here, and reuse it for each call below,
	//otherwise we have to redifine it in each method.
	function requestWrapper(options, res){
		function callback(error, response, body) {
	  		if (!error && response.statusCode == 200) {
	    		var data = JSON.parse(body);
	    		res.json(data);
	  		} else {
	  			console.log(error);
	  		}
		}
		Request(options, callback);
	}
	
	return {
		/*****************************************************
					         INDEX
		*****************************************************/
		// Return all gifs for a particular category
		index: function(req, res){
			var options = {
				url: rootUrl + 'search?q=' + req.params.category + keyString + limit,
				headers: {
					'User-Agent': 'request'
				}
			}

			/*---Fires off request to Giphy API---*/
			requestWrapper(options, res);
		},

		/*****************************************************
					           SHOW
		*****************************************************/
		// Get a single gif by id
		show: function(req, res){
			var options = {
				url: rootUrl + req.params.id + '?' + keyString,
				headers: {
					'User-Agent': 'request'
				}
			}

			/*---Fires off request to Giphy API---*/
			requestWrapper(options, res);
		}
	}
})();