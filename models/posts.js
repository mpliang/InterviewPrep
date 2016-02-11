'use strict';

const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
  // title: {type: String, required: true},
  // link: {type: String, required: false},
  // body: {type: String, required: true},
  // upvotes: {type: Number, default: 0},
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

  author: {type: mongoose.Schema.ObjectId, required: true, ref: 'User'},
  topic: {type: mongoose.Schema.ObjectId, ref: 'Topic'},
  responseTo: {type: mongoose.Schema.ObjectId, ref: 'Post'},
  answers: [{type: mongoose.Schema.ObjectId, ref: 'Post'}],
  comments: [{type: mongoose.Schema.ObjectId, ref: 'Post'}],
  followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  updated: { type: Date, default: Date.now },
  title: {type: String, required: true},
  body: {type: String, required: true},
  likes: {type: Number, default: 0},
  views: {type: Number, default: 0},
  tags: [{type: String}]
});



// PostSchema.methods.upvote = function(cb) {
// 	this.upvotes += 1;
// 	this.save(cb);
// };

module.exports = mongoose.model('Post', PostSchema);
