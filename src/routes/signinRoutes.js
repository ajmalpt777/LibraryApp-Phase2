const express = require('express');
const signinRouter = express.Router();
const Userdata = require('../model/Userdata');
function router(nav){
    signinRouter.get('/', function(req,res){
    res.render("signin",
    {
        nav,
        title:'Library',
        action: "/home"
    });
});

signinRouter.post('/add', function(req,res){

    const email= req.body.email;
    const password1= req.body.password1;
    Userdata.findOne({email:email, password1:password1},function(err,user){

        if(err){
            console.log(err);
            return res.status(500).send();
        }

        if(!user){
        
            return res.status(404).send("Something Went Wrong. Type the correct details if already a member. Sign Up if you are a new member.");
        }
        
        res.redirect('/home');
    }) 
});
       
return signinRouter;
}

module.exports=router;