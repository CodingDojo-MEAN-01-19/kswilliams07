// function counter(){
//   var count = 0;

//   function childScope(){
//     return count += 1;
//   }
//   return childScope;
// }

// console.log(counter);

// counter = counter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function personMaker(name, items){
//   const person = { name };

//   person.items = items;
//   person.take = take;
  
//   function take(item, target){
//     if(!target || !Array.isArray(target.items)){
//       throw new Error('take must have an items array');
//     }

//     for(let index=0; index < target.items.length; index++){
//       if(item === target.items[index]){
//         console.log('found', item);
//         //slice -- makes a copy
//         //splice -- mutates

//         target.items.splice(index, 1);
//         person.items.push(item);
//         return true;
//       }
//     }
//     return false;
//   }
//   return person;
// }

// const bob = personMaker('Bob',['glue', 'paint', 'gold']);
// const sally = personMaker('Sally',['crackers', 'money', 'sand']);

// sally.take('gold', bob);
// console.log(bob);
// console.log(sally);

// bob.take('sand', sally);
// console.log(bob);
// console.log(sally);

function Person(name, items){
  if(!(this instanceof Person)){
    console.log(name + ' is not a person');
    return new Person(name, items);
  }
  this.name = name;
  console.log('this is', this);

  this.items = items;

}

Person.prototype.take = function take(item, target){
  console.log(`${this.name} is taking`);
  if(!target || !Array.isArray(target.items)){
    throw new Error('take must have an items array');
  }

  for(let index=0; index < target.items.length; index++){
    if(item === target.items[index]){
      console.log('found', item);
      //slice -- makes a copy
      //splice -- mutates

      target.items.splice(index, 1);
      this.items.push(item);
      return true;
    }
  }
  return false;
}

const bob = Person('Bob',['glue', 'paint', 'gold']);
const sally = new Person('Sally',['crackers', 'money', 'sand']);

sally.take('gold', bob);
console.log(bob);
console.log(sally);

bob.take('sand', sally);
console.log(bob);
console.log(sally);

const backpack = {
  items: ['compass', 'map', 'snacks']
};

console.log(backpack);
bob.take('compass', backpack);
// bob.take.call(backpack, 'gold', sally);
bob.take.apply(backpack, ['gold', sally]);

console.log(bob);
console.log(backpack);
console.log(sally);