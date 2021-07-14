var express = require('express');
var router = express.Router();
const cookie_des = require('../BackUtils/readCookie');

router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Main Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

module.exports = router;
