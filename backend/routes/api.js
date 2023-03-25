const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.put("/addpoints", function (req, res) {
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(user){
        User.findOne({_id:req.params.id}).then(function(user){            
            res.send(user);
        })        
    })  
});
