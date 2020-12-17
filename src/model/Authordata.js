const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.vcicb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema1 = mongoose.Schema;

const AuthorSchema = new Schema1({
    name:String,
    genre:String,
    book1:String,
    book2:String,
    book3:String,
    image:String
});

var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;