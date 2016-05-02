var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email            : String,
    username         : String,
    password         : String,
    city             : String,
    about            : String,
    posts_created    : [],
    posts_saved      : [],
    boards_created   : [],
    boards_following : [],
    topics           : [],
    followers        : [],
    followings       : []
});

var User = mongoose.model("User", userSchema);
