// The stores are objects in charge of fetching and storing data for a particular thing
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');



/*****************************************************
			 DEFINING STORE TO BE EXPORTED
*****************************************************/
module.exports = Reflux.createStore({
	// This says that if any of the actions within Actions gets called, and this particular
	//store has a method with the same name, call that method
	listenables: [Actions],

	getTopics: function(){
		// Gets data from the specified url that is returned as a promise
		//Whenever we successfuly fetch data we set TopicStore.topics to the data
		//property of our json-ified response. 
		return Api.get('funny')
			.then(function(json){
				this.topics = json.data
			}.bind(this));
	},
});
