var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list', function(req, res){
  return standupCtrl.list(req, res);
});

router.post('/byid', function(req, res){
  return standupCtrl.betById(req, res);
});

router.get('/newnote', function(req, res){
  return standupCtrl.getNote(req, res);
});


router.post('/newnote', function(req, res){
  return standupCtrl.create(req, res);
});
module.exports = router;
