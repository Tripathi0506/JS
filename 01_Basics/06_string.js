const name = "prateek"
const repoCount = 50

// console.log(name + repoCount + "Value") old method

// new one string interpolatiopn

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('prateekt-tripathi')

console.log(gameName[0]);
console.log(gameName.__proto__); // prototype methods fetch by using .(dot)

console.log(gameName.length)    // total length of string
console.log(gameName.toLocaleUpperCase());  // convert the string in uppercase
console.log(gameName.charAt(2)); // which cahr store in index no. 2 that is 'a
console.log(gameName.indexOf('t')); // it provide the in which positin char 't' in the index

const newString = gameName.substring(0, 4)  // start from 0 which is included and end in 4 where the last index 4 is not include. in substring if you pass negative value substring ignore the negative value and start from the 0
console.log(newString);

const anotherString = gameName.slice(-8, 4) // also give negative index no. where it prints value in reverse
console.log(anotherString);

const newStringOne = "   prateek  " // space given
console.log(newStringOne); // not remove space 
console.log(newStringOne.trim()); // remove the space and only accept the string value

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));  // replace the value %20 with '-'

// also ask something that
console.log(url.includes('hitesh')); // gives true
console.log(url.includes('sundar')) // gives false

console.log(gameName.split('-'));



