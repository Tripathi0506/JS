// Array Part 2
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "Aquaman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// During push output will provide existing array
// but during concatenate output will be in new array

// const all_new_heros = [...marvel_heros, ...dc_heros]  // Spread operator ...spread the array value

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // merge nested arrays in one single array
console.log(real_another_array);


console.log(Array.isArray("prateek"));
console.log(Array.from("prateek")); // make array
console.log(Array.from({name: "prateek"})); // it is not capable to from so give empty array in the output

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4)); // another method to make array

