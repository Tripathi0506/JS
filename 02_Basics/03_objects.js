// singelton
// Object.create // creation of object by constructor

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "prateek",
     "full name": "prateek tripathi",
     [mySym]: "mykey1", // use for unique symbol value
     age: 22,
     location: "Satna",
     email: "tripathi@gmail.com",
     isLoggedIn: false,
     LastLoggesIn: ["monday", "saturday"]

}

// call the object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // call the symbol

JsUser.email = "prateekchatgpt@gmail.com" // update the key value
// Object.freeze(JsUser) // freeze the value so if you update the same value in next line of code it will not change

JsUser.email = "prateekgoogle.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







