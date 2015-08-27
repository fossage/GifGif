var Request = require('request');
var giphy_key = require('../keys/giphy_api').key;

module.exports = (function() {
	var rootUrl = 'http://api.giphy.com/v1/gifs/';
	var keyString = '&api_key=' + giphy_key;
	var limit = '&limit=100'

	// Helper function to fire off API request
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
			var query;
			
			if(req.params.category === 'trending'){
				query = 'trending?';
			} else {
				query = 'search?q=' + req.params.category;
			}

			var options = {
				url: rootUrl + query + keyString + limit,
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