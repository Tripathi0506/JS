// Scopes
// Scope is the context in which a variable is defined

// There are two types of scopes in JavaScript:
// 1. Global Scope
// 2. Local Scope
// Global Scope
// Variables that are declared outside of any function or block are in the global scope.
// They can be accessed from anywhere in the code.

// Local Scope
// Variables that are declared inside a function or block are in the local scope.
// They can only be accessed within that function or block.

// Example of Global Scope
// var c = 300

let a = 300


if (true) {

    let a = 10 // example of localscope 
    const b = 20
    // console.log("INNER:", a) 

}

// console.log(a) // 300 for global scope and 10 for local scope
// console.log(b);
// console.log(c);


//  Nested scope

function one() {
    const username = "prateek"

    function two() {
        const website = "youtube"
        console.log(username) // it will print the value of username
    }
    // console.log(website) // it will give an error because website is not defined

    two()
    // in nested function child function are access the parent function
}

// one()

if (true) {
    const username = "prateek"
    if (username === "prateek") {
        const website = "youtube"
        console.log(username + website) // it will print the value of website + username = prateekyoutube
    }
   // console.log(website) // it will give an error because website is not defined
}
// console.log(username) // it will give an error because username is not defined






//******************************* Interesting ***************************************
// Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.
addone(5) // it will not give an error because addone is defined below
function addone(num) {
    return num + 1
}

// addone(5)

// addTwo(5) // it will give an error because addTwo is defined below as an variable where the function addone is stored

const addTwo = function (num) {
    return num + 2
}
addTwo(5)