// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktima", "dogo"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]); // for access the array
// console.log(myHeros[1]);


// Array methods

// myArr.push(6) // add the new value 6 in the last index of the array
// myArr.push(7)
// myArr.pop() // delete one value from the last index

// myArr.unshift(9) // shift the already stored element the right and add new element of paranthesis in the starting of the index
// myArr.shift() // delete the element from the starting index and shift the remaining element in the left

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // convert the element into string


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// Slice, Splice **************************************

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // give the otput element according to paranthesis 1,2 not include last element 3

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // remove the 1-3 elements and print the remaining 0,4,5
console.log("C ", myArr);
console.log(myn2);






