var express = require('express');
var router = express.Router();
var db = require("../models");
//var helpers = require("../helpers/todos");


router.get("/",function(req, res){
  db.details.find()
  .then(function(foundDetails){
      res.json(foundDetails);
  })
  .catch(function(err){
      res.send(err);
  })
});



router.post("/",function(req, res){
  db.details.create(req.body)
  .then(function(newDetail){
      res.status(201).json(newDetail);
  })
  .catch(function(err){
      res.send(err);
  })
});




router.get("/:id",function(req, res){
  db.details.findById(req.params.id)
  .then(function(foundDetails){
    console.log("Triiassa")
      res.json(foundDetails);
  })
  .catch(function(err){
      res.send(err);
  })
});


router.put("/:id",function(req, res){
  db.details.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(function(foundDetails){
      res.json(foundDetails);
  })
  .catch(function(err){
      res.send(err);
  })
});


router.delete("/:id",function(req, res){
  db.details.remove({_id: req.params.id})
  .then(function(){
      res.json({message:"Item Removed"});
  })
  .catch(function(err){
      res.send(err);
  })
});
module.exports = router;
