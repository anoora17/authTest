var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user)
  res.render({'user':{all: req.user
                      }
        });
});

module.exports = router;
