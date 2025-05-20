const score = 400
console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // value will change in comas which is easy to read


// ************************* MATHS *************************************************


console.log(Math);
console.log(Math.abs(-4));// absolute value
console.log(Math.round(4.6)); // roundoff 
console.log(Math.ceil(4.2)); // before  dcimal value
console.log(Math.floor(4.2)); // after decimal value
console.log(Math.min(4,3,2,1)) // minimum value
console.log(Math.max(4,3,2,1)); // maximum value

console.log(Math.random); // always generate random value inclded 0
console.log((Math.random()*10) + 1); // always generate +ve value means its minimum vakue is 1
console.log(Math.floor(((Math.random)*10) + 1 )); // generate floor value means without any decimal


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // always generate a number which is graeter than the minimum vaolue 10



 







