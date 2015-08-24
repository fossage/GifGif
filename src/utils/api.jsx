// This is where we will keep all of our external request logic

/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Fetch = require('whatwg-fetch');
var ApiKeys = require('../keys/imgur_keys');

var rootUrl = 'https://api.imgur.com/3/';
var apiKey = ApiKeys.key;


/*****************************************************
		   DEFINING API OBJECT TO BE EXPORTED
*****************************************************/
module.exports = {
	// This function allows us to simply pass in the category as the url argument
	//and the funtion handles the rest of the url construction for us
	get: function(url){
		return fetch(rootUrl + url, {
			// A headers configuration object used with fetch
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		// This promise takes in our response.  Note that the response
		//has to be explicitly converted to json otherwise we can't use it
		.then(function(res){
			return res.json();
		})
	}
}