const math = require("./mathlib")();

const a = 1;
const b = 2;
const c = 3;
const d = 5;
const e = 35;

console.log(`Sum of ${b} and ${c} is ${math.add(b,c)}`);
console.log(`Product of ${c} and ${d} is ${math.multiply(c,d)}`);
console.log(`Square of ${d} is ${math.square(d)}`);
console.log(`Random number between ${a} and ${e} is ${math.random(a,e)}`);