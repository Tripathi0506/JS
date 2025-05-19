// const tinderUser = new Object() // Singelton object

const tinderUser = {} // non singelton object
tinderUser.name = "prateek"
tinderUser.age = 22
tinderUser.isLoggedIn = false
tinderUser.lastActive = "2023-10-01"
tinderUser.location = "Satna"

// console.log(tinderUser);

const regularUser = {
    email: "prateek@gmail.com",
    // Nested Objects
    fullName: {
        userFfullName: {
            firstName: "prateek",
            lastName: "tripathi"
        }
    }
}

// console.log(regularUser.fullName.userFfullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2}  // object ke andar object ayega

// const obj3 = Object.assign({},obj1, obj2) // object ko merge karne ke liye

const obj3 = { ...obj1, ...obj2, ...obj4 } // separator

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "prateek@gmail.com"
    },
    {
        id: 2,
        email: "prateek@gmail.com"
    },
    {
        id: 3,
        email: "prateek@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check the key is present or not


