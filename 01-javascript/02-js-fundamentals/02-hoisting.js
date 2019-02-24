//Problem 1
//original code - returns undefined because var hoist 
//the declaration of variable hello but not the assignment
console.log(hello);
var hello = 'world';

//Problem 2
//Output is magnet because var needle is scoped to the function test()

var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}

//Problem 3
//Output is super cool because function print() is not called
var brendan = 'super cool';
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

//Problem 4
//Output is chicken from first console.log and half-chicken from calling function eat
var food = 'chicken';
console.log(food);
eat();
function eat(){
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

//Problem 5
//Output is error from assigning function() to variable mean.  This does not make mean a function so mean() is invalid.
mean();
console.log(food);
var mean = function() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);


//Problem 6
//Output is undefined from first console.log is called before genre is assigned.  When rewind() function is called, output is rock and r&b.  Last console.log outputs disco too because other assignments to genre are scoped to the function.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

//Problem 7
//Output is san jose from first console.log.  When learn function is called, output is seattle and burbank.  Last console.log output is san jose because assignments in learn function is scoped to the function.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

//Problem 8
//Error for assigning "closed for now" to const object dojo
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}

