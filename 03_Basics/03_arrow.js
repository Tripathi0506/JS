// THIS and Arrow Functions

const user = {
    username: "prateeek",
    price: 999,

    welcomeMessage: function () { 
        console.log(`${this.username} , Welcome to website`)
    }
    // this current value ki baat karta hai

}

// user.welcomeMessage() // it will print the value of username
// user.username = "sam" // update the value of username
// user.welcomeMessage()   // it will print the value of updated username

// console.log(this) // it will return empty object bcs in node this property return empty value


// function chai() {
//     let username = "prateek"
//     console.log(this) // in node inside the function this give lots of properties run the code and check it
// }
// chai()

// const chai = function chai() {
//     let username = "prateek"
//     console.log(this.username)
// }


const chai = () => {
    let username = "prateek"
    console.log(this.username)
}

// chai()


// Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}