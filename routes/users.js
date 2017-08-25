var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/', function(req, res, next){

    if(!req.user){
        res.redirect('/');
    }
    next();
})
/* GET users listing. */
router.get('/', function(req, res) {
  res.render('signup', {user: {name: req.user.displayName,
                              image: req.user.image}});
});

module.exports = router;
