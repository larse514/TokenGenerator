var express = require('express');
var router = express.Router();

router.get('/helloworld', function(req, res){res.json("helloworld")});
 module.exports = router;