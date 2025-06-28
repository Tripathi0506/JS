// Truthy and Falsy values in JavaScript

const userEmail = []

if (userEmail) {
    console.log("Got UserEmail")
} else {
    console.log("Don't have userEmail")
}



// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy Values
// Everything else that is not falsy is truthy

//  "0", 'false', 'null', 'undefined', 'NaN', [], {}, function() {}, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

if (userEmail.length === 0) {
    console.log("Array is empty")
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}





// Nullish Coalescing Operator (??)==================================================================================================>
// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
// It is useful for providing default values when dealing with potentially null or undefined values.

let val1;
// val1 = 5 ?? 10;                // If val1 is null or undefined, it will be set to 10, otherwise it will remain 5

// val1 = undefined ?? 15;           // If val1 is undefined, it will be set to 15, otherwise it will remain undefined

val1 = null ?? 10 ?? 20;            // If val1 is null, it will be set to 10, otherwise it will remain null


console.log(val1);             // Output: 10



// Ternary Operator====================================================================================================================>
// The ternary operator is a shorthand for an if-else statement.
// It takes three operands: a condition, a value if the condition is true, and a

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")