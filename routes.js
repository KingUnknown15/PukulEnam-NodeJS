var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/",function(req,res){
    console.log("Hello i'm on the start page here");
    res.render("index")
});

router.get("/abstract",function(req,res){
    console.log("Abstract Page");
    res.render("abstract")
});

module.exports = router;