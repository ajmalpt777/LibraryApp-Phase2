const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books=[
    //     {
    //         title:'Harry Potter',
    //         auther:'J K Rowling',
    //         genre:'Fantasy',
    //         img:"b1.jpg"
    //     },
    //     {
    //         title:'The Fault In Our Stars',
    //         auther:'John Green',
    //         genre:'Novel',
    //         img:"b2.jpg"
    //     },
    //     {
    //         title:'The Alchemist',
    //         auther:'Paulo Coelho',
    //         genre:'Novel',
    //         img:"b3.jpg"
    //     },
    //     {
    //         title:'Pride And Prejudice',
    //         auther:'Jane Austen',
    //         genre:'Novel',
    //         img:"b4.jpg"
    //     }
    // ]
    booksRouter.get('/update/:id', function(req,res){
        const id= req.params.id
        Bookdata.findOne({_id:id})
        .then(function (book){
        res.render("updatebook",
        {
            nav,
            title:'Library',
            book,
            id
        });
    })
    });

    booksRouter.post('/update/add/:id', function(req,res){
        //     res.send("hey added");
        // })
        const id= req.params.id
        const updates = req.body
        
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }
        Bookdata.findOneAndUpdate({_id:id}, item, updates,function(){
            console.log("updated");
        }) 
        res.redirect('/books'); 
    });

    booksRouter.get('/delete/:id', function(req,res){
        const id= req.params.id
        Bookdata.findOneAndDelete({_id:id} ,function(){
            console.log("one deleted");
        })
        res.redirect('/books');
    });
    
    booksRouter.get('/addbook', function(req,res){
        res.render("addbook",
        {
            nav,
            title:'Library'
        });
    });
        
        booksRouter.post('/addbook/add', function(req,res){
        //     res.send("hey added");
        // })
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }
        var book=Bookdata(item);
        book.save();
        res.redirect('/books');
        });






    booksRouter.get('/:id', function(req,res){
        const id= req.params.id
        Bookdata.findOne({_id:id})
        .then(function (book){
            res.render("book",
            {
                nav,
                title:'Book',
                book,
                id,
                action: '#'
            });
        })
       
    });
    
    booksRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function (books){
            res.render("books",
            {
                nav,
                title:'Library',
                books
            });
        })
        
    });
    
    return booksRouter;
}

module.exports=router;