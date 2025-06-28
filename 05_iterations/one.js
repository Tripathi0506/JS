// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    
    if (element == 5) {
        console.log("5 is best number")
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop value ${i}`)
        // console.log(i + '*' + j + '=' + i * j);
    }
}

let myArray = ["flash", "light", "water", "fire", "earth"];

for (let i = 0; i < myArray.length; i++) { 
    const element = myArray[i];
    console.log(element)
}

// break==============================================================================================>

// for (let index = 1; index <= 20; index++){
//     if (index == 5) {
//         console.log(`Detected 5`)
//         break;                     // from this line it breaks the loop an exit it
//     }
//     console.log(`Value of i is ${index}`)
// }

// Continue===============================================================================================>


for (let index = 1; index <= 20; index++){
    if (index == 5) {
        console.log(`Detected 5`)
        continue;                    // condition is skip (only one) & remaining will be print
    }
    console.log(`Value of i is ${index}`)
}