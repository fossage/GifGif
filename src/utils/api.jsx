// This is where we will keep all of our external request logic

/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Fetch = require('whatwg-fetch');

var giphyKey = require('../keys/giphy_key').key;
var rootUrl = 'http://api.giphy.com/v1/gifs/';


/*****************************************************
		   DEFINING API OBJECT TO BE EXPORTED
*****************************************************/
module.exports = {
	// This function allows us to simply pass in the category as the url argument
	//and the funtion handles the rest of the url construction for us
	get: function(queryString){
		return fetch(rootUrl + queryString + '&api_key='+ giphyKey, {
			headers: {
				'Accept': '*'
			}
		})
		// This will take our response in the form of a promise.  Note that the response
		//has to be explicitly converted to json otherwise we can't use it
		.then(function(res){
			console.log(res);
			return res.json();
		})
	}
}