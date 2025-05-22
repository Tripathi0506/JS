// Immediately Invoked Function Expression (IIFE)



// ()() global scope ke pollution ko hatane ke liye IIFE ka use kiya


(function chai() { // named iife
    console.log('DB Connected')
})();  //  here this semicolon is mendatory to end the above function

// iife function is also be written as arrow function

(() => {
    console.log('DB Connected Two')
})();


    ((name) => {   //argument passed
        console.log(`DB Connected Two ${name}`);
} ) ("prateek")   // parameter passed