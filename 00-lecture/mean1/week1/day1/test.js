//var myStr = 'some content';

//myStr = 2134234;

//console.log(myStr);

var array = ['cat', 'dog', 'horse'];

//console.log(array.push(myStr));
//console.log(array);

/*for(var index = 0; index < array.length; index++){
  console.log('index is', index);
  console.log('element', array[index]);
}*/

/*for(var index in array){
  console.log('index is', index);
  console.log('element', array[index]);
}*/

/*for(var element of array){
  console.log('element is', element);
}*/

/*for(var [index, item] of array.entries()){
//  console.log('element is', element);
//  var index = element[0];
//  var item = element [1];

  console.log('index item', index, item);
}*/

var person = {
  age: 23,
  height: 6.3,
  hairColor: 'brown'
};

console.log(person)
person.gender = 'female'

for(var key in person){
  console.log(key, person[key]);
}