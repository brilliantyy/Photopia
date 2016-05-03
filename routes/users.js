var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

router.route('/register')
    .post(function(req, res, next) {
        new User({
            username : req.body.username,
            password : req.body.password
        }).save(function(err){
            if (err) {
                return console.error(err);
            } else {
                res.render('home', {username: req.body.username});
            }
        });
    });

module.exports = router;
