const express = require('express');
const signupRouter = express.Router();
const Userdata = require('../model/Userdata');


function router(nav){

    signupRouter.get('/', function(req,res){
    res.render("signup",
    {
        nav,
        title:'Library',
        action: "/home"
    });
});

signupRouter.post('/add', function(req,res){
    
    var email = req.body.email;
    var number = req.body.number;
    var password1 =  req.body.password1;
    var password2 =  req.body.password2;
    
    var newuser=new Userdata();
    newuser.email=email;
    newuser.number=number;
    newuser.password1=password1;
    newuser.password2=password2;

    newuser.save(function(err,savedUser)
    {
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        
        res.redirect('/home');

    })

    });


return signupRouter;
}

module.exports=router;


