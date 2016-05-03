var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('sign_up');
    });

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {

});

router.post('/register', function(req, res, next) {
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
