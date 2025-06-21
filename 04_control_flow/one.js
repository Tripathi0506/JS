// if

const isUserLoggedIn = true;
const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50")
// }
// else {
//     console.log("temperature is greater then 50")
// }

// console.log("Exected")

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`user power: ${power}`) // ReferenceError: power is not defined

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userloggedIn && debitCard) {
    console.log("Allow to buy course")
}

if(loggedInFromGoogle && loggedInFromEmail) {
    console.log("User logged in")
}