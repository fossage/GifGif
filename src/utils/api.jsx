// This is where we will keep all of our external request logic

/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Fetch = require('whatwg-fetch');
// var rootUrl = 'http://api.giphy.com/v1/gifs/';


/*****************************************************
		   DEFINING API OBJECT TO BE EXPORTED
*****************************************************/
module.exports = {
	get: function(queryString){
		return fetch('/gifs/' + queryString)
		.then(function(res){
			return res.json();
		})
	},

	show: function(queryString){
		return fetch('/gif/' + queryString)
			.then(function(res){
				return res.json();
			});
	}
}