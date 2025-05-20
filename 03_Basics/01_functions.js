// Functions
function saymyname() {
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("e");
    console.log("e");
    console.log("k");

}
saymyname() // function call

// function addTwoNumbers(number1, number2) { // during functions declartion the inside of the paranthesis is parameter
//     console.log(number1 + number2);

// }
// addTwoNumbers(5, 10) // add tow numbers... value given inside thhe paranthesis which is called arguments
// addTwoNumbers(20, null)

// const result = addTwoNumbers(5, 10) // function call
// console.log("Result:", result); // it returns  undefined in  the result variable

// We can also write as

function addTwoNumbers(number1, number2) { // during functions declartion the inside of the paranthesis is parameter

    // let result = number1 + number2;
    // return result; // after return statement not anything will be print 
    return number1 + number2; // we can also write like this
    // console.log("prateek")
}

const result = addTwoNumbers(5, 10)

// console.log("Result:", result); // it returns 15 in the result variable

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return; // if we don't want to return anything then we can use return statement
    }
    return `${username} just logged in` // only return the value
}
// loginUserMessage("Prateek") // it will return the string but not print because we are not using console.log
// console.log(loginUserMessage("Prateek")) 
console.log(loginUserMessage()) // if value is not passed then it will print undefined not null

