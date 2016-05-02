var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('sign_up');
    })
    .post('/', function(req, res, next) {
        res.render('index', { username: req.body.username, password: req.body.password });
    });



module.exports = router;
