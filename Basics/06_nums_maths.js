const score = 400

//console.log(score);

const balance = new Number(100)  // to create a number object

//console.log(balance);


//console.log(balance.toString().length);  // to get the length of the number
//console.log(balance.toFixed(3));  // to get the number with the decimal points

const otherNumber = 24.96475

//console.log(otherNumber.toPrecision(4));  // to get the number with the precision

const hundred = 10000000
//console.log(hundred.toLocaleString('en-IN'));

/******************************************************************************MATHS******************************************************************************************************/
console.log(Math);

console.log(Math.abs(-4)); // to get the absolute value of the number
console.log(Math.round(4.9)); // to round the number
console.log(Math.ceil(4.1)); // to ceil the number
console.log(Math.floor(4.9)); // to floor the number
console.log(Math.max(9,7,5,2,1)); // to get the maximum number
console.log(Math.min(8,5,7,2,7)); // to get the minimum number

console.log(Math.floor(Math.random() *10)+1); // to get the random number between 1 to 10


const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max - min + 1))+ min); // to get the random number between 10 to 20
