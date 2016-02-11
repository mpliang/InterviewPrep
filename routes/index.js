'use strict'

var express = require('express');
var Post = require('../models/posts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res, next) {
  Post.find( (err, data)  => {
    res.json(data)
  });
});

router.post('/newPost', (req, res) => {
  console.log("req.body", req.body);
  Post.create(req.body, (err, savedPost) => {
    res.status(err ? 400 : 200).send(err || savedPost)
  });
});

module.exports = router;
