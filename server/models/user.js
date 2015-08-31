var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_name: { type: String, trim: true, unique: true},
  email: { type: String, trim: true, unique: true},
  password: { type: String, trim: true },
  salt: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);
UserSchema.path('user_name').required(true, "User Name is required");
UserSchema.path('email').required(true, "Email is required");
UserSchema.path('password').required(true, "Password is required");