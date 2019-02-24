const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/books_n_authors', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongo Connected'));

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(parser.urlencoded({extended: true}));

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  isAlive: {
    type: Boolean,
    default: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  pages: Number,
  year: Number,
  publisher: String,
}, {
    timestamps: true
});

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);

app.get('/', function(request, response){
  response.render('index');
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));