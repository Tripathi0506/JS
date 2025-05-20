// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456987125894563217

// Reference (Non Primitive)
// Array, object, 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "prtateek",
    age : 22,
}
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof anotherId)

// ***********************************************************************************

// ******* Stack and Heap *******************

// Stack (Primitive where copy of value access in next fetch)
// Heap ( Non Primitive where reffernce(means changes will be done onn original value not his copied value) will fetch in the value)

let myYoutubename = "prateekdotcom"

let anotherName = myYoutubename
anotherName = "Tripathi0506"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "tripathi@google.com",
    upi : "user@ybl"

}

let userTwo = userOne

userTwo.email = "prateek@google.com"

console.log(userOne.email);
console.log(userTwo.email);

