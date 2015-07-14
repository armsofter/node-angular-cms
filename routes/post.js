/**
 * Created by Armsofter on 7/14/2015.
 */
var express = require('express');
var router = express.Router();
var Post = require('../controllers/PostController');

//Create new post
router.post('/create' ,function(req, res){
  return Post.create(req, res);
});

//Get list of posts
router.get('/list' ,function(req, res){
  return Post.list(req, res);
});

//Get post by id
router.get('/:id' , function(req, res){
   return  Post.getById(req, res);
});

//Update post
router.post('/update', function(req, res){
   return Post.update(req, res);
});

//Delete post
router.get('/delete/:id', function(req, res){
   return Post.delete(req, res);
});

module.exports = router;