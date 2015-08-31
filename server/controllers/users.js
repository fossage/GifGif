var User 	= mongoose.model("User"),
	jwt 	= require('jsonwebtoken'),
	_       = require('lodash'),
	md5 	= require('md5'),
	config 	= require('../config/config');


function createToken(user){
  		return jwt.sign(_.omit(user, 'password'), config.secret, {expiresInMinutes: 60*5 });
}

function getUser(queryBy, val, req, res){
	var callback = function(err, user){
		if(err){
			console.log(err);
			return null;
		} else {
			if(user){
				var hashedPass = md5(user.salt + req.body.password );
				if(hashedPass !== user.password){
					return 	res.status(400).send("Check that username/email and password are correct");
				} 
			
				res.status(201).send({id_token: createToken(user)});
			}
		}
	}

	if(queryBy == 'user_name'){
		User.findOne({user_name: val}, callback);
	} else {
		User.findOne({email: val}, callback);
	}
}

module.exports = {
	create: function(req, res){
		var profile = _.pick(req.body, 'user_name', 'email', 'password');
		profile.salt = md5(Math.random() * 100);
		profile.password = md5(profile.salt + profile.password);
		newUser = new User(profile);

		newUser.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				res.json({id_token: token});
			}
		});
	},

	show: function(req, res){
		if (!(req.body.user_name || req.body.email) || !req.body.password) {
		  return res.status(400).send("You must send the username or email and the password");
		}

		if(req.body.user_name){
			getUser('user_name', req.body.user_name, req, res);
		} else {
			getUser('email', req.body.email, req, res);
		}
	}
}












