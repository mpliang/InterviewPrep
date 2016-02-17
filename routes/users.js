var express = require('express');
var router = express.Router();

/* GET users listing. */

var User = require('../models/user');

router.post('/register', function (req, res) {
  console.log('register', req.body);
  // User.register(req.body, (err, token) => {
  //   if (err) return res.status(400).send(err);
  //   res.send(token);
  // });
});

router.post('/login', function (req, res) {
  User.login(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.send(token);
  });
});


module.exports = router;
