//Callback
function map(array, callback) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    const result = callback(array[index], index, array)

    console.log(result);
    results.push(result);
  }

  return results;
}

const numArray = [999, 234, 543, 2398];

const res = map(numArray, function (element, index) {
  return element + index;
});
console.log('res', res)

const rez = map(numArray,  element => element * element);
//ES6 syntax and implicit return

console.log('rez', rez)


//Asynchronous Code - Basic Example
console.log('before');
function sayHello(name) {
  setTimeout(function () {
    console.log(`Hello ${name}`);
  }, 3000)
}
sayHello('Jason')
console.log('after');

//Asynchronous Code - More Complex Example
function getThingsFromDB(query, callback) {

  return setTimeout(function () {
    console.log('callback', callback);
    const data = ['thing1', 'thing2', 'thing3'];
    callback(data);
  }, 4000);
}


getThingsFromDB('select * from things;', function (things) {

  console.log('running in the future!', things);

  const res = map(things, thing => thing + ' this is a thing');


  console.log(res);
 });
