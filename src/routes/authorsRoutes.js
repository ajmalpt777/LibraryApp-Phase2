const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    // var authors=[
    //     {
    //         name:'Paulo Coelho ',
    //         genre:'Poet',
    //         book1:'The Alchemist',
    //         book2:'Eleven Minutes',
    //         book3:'The Pilgrimage',
    //         img:"a1.jpg"
    //     },
    //     {
    //         name:'Leo Tolstoy',
    //         genre:'Novelist',
    //         book1:'War And Peace',
    //         book2:'Anna Karenina',
    //         book3:'Childhood',
    //         img:"a2.jpg"
    //     },
    //     {
    //         name:'J K Rowling',
    //         genre:'Fantasy',
    //         book1:'Harry Potter',
    //         book2:'The Casual Vacancy',
    //         book3:'Troubled Blood',
    //         img:"a3.jpg"
    //     },
    //     {
    //         name:'Vaikam Muhammed Basheer',
    //         genre:'Novelist',
    //         book1:'Balyakala Sakhi',
    //         book2:'Pathummayude Aadu',
    //         book3:'Mathilukal',
    //         img:"a4.jpg"
    //     }
    // ]

    authorsRouter.get('/update/:id', function(req,res){
        const id= req.params.id
        Authordata.findOne({_id:id})
        .then(function (author){
        res.render("updateauthor",
        {
            nav,
            title:'Library',
            author,
            id
        });
    })
    });

    authorsRouter.post('/update/add/:id', function(req,res){
        //     res.send("hey added");
        // })
        const id= req.params.id
        const updates = req.body
        
        var item={
            name: req.body.name,
            genre: req.body.genre,
            book1: req.body.book1,
            book2: req.body.book2,
            book3: req.body.book3,
            image: req.body.image
        }
        Authordata.findOneAndUpdate({_id:id}, item, updates,function(){
            console.log("updated");
        }) 
        res.redirect('/authors'); 
    });
        // var author=Authordata(item);
        // author.save();
        // res.redirect('/authors');
        // });

    authorsRouter.get('/delete/:id', function(req,res){
        const id= req.params.id
        Authordata.findOneAndDelete({_id:id} ,function(){
            console.log("one deleted");
        })
        res.redirect('/authors');
    });


   
// authorsRouter.get('/update/:id', function(req,res){
//         const id= req.params.id
//         Authordata.findOne({_id:id})
//         .then(function (author){
//         res.render("updateauthor",
//         {
//             nav,
//             title:'Library',
//             author
//         });
//     })
//     });
    
  authorsRouter.get('/addauthor', function(req,res){
    res.render("addauthor",
    {
        nav,
        title:'Library',
        action: "/authors"
    });
   });



    
    authorsRouter.post('/addauthor/add', function(req,res){
    //     res.send("hey added");
    // })
    var item={
        name: req.body.name,
        genre: req.body.genre,
        book1: req.body.book1,
        book2: req.body.book2,
        book3: req.body.book3,
        image: req.body.image
    }
    var author=Authordata(item);
    author.save();
    res.redirect('/authors');
    });



    authorsRouter.get('/:id', function(req,res){
        const id= req.params.id
        Authordata.findOne({_id:id})
        .then(function (author){
        res.render("author",
        {
            nav,
            title:'Library',
            author,
            id
        });
    })
    });
    
    authorsRouter.get('/', function(req,res){
        Authordata.find()
        .then(function (authors){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    })
    });
    
    return authorsRouter;
}

module.exports=router;