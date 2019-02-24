var express = require("express");
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/cats', function(request, response) {
  response.render("cats");
});

app.get('/cat1', function(request, response) {
  var cat_array = [{image: '/images/cat1.jpg', name: 'The Pack', number: '5', favorite_game: 'Chase The Yarn'}];
  response.render("details", {cat: cat_array});
});

app.get('/cat2', function(request, response) {
  var cat_array = [{image: '/images/cat2.jpg', name: 'Furball', number: '1', favorite_game: 'Chase The Dog'}];
  response.render("details", {cat: cat_array});
});

app.get('/cat3', function(request, response) {
  var cat_array = [{image: '/images/cat3.jpg', name: 'Curiosity', number: '3', favorite_game: 'Chase The Ball'}];
  response.render("details", {cat: cat_array});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
