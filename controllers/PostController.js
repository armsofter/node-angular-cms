/**
 * Created by Armsofter on 7/14/2015.
 */
var Post = require('../models/Post');

exports.create = function(req, res){
  var insert = new Post({
      Title: req.body.title,
      Autor: req.body.autor,
      Content: req.body.content,
      Active: req.body.active
  });
    insert.save();
    res.send({Success:true});
};
exports.list = function(req, res){
  Post.find(function(err, result){
      res.json(result);
  }) ;
};

exports.getById = function(req, res){
    Post.find({_id: req.params.id}, function(err, result){
       res.json(result);
    });
};
exports.update = function(req, res){
    Post.findOne({_id: req.body.id}, function (err, post) {
        post.Title = req.body.title;
        post.Autor = req.body.autor;
        post.Content = req.body.content;
        post.Active = req.body.active;
        post.save(function (err) {
            if(err) {
                console.error(err);
            }
        });
    });
    res.send({Success:true});
};

exports.delete = function(req, res){
    Post.remove({_id: req.params.id}, function(err){
    });
    res.send({Success:true});
};