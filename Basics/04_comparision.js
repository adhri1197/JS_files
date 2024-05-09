console.log("2" > 1); // true, because string "2" is converted to a number 2
//console.log("02" > 1);
//console.log("2" > "12");

//console.log(null > 0); // false, because null gets converted to 0
console.log(null == 0); // false, because null gets converted to 0
//console.log(null >= 0); // true, because null gets converted to 0

console.log(undefined == 0); // false, because undefined gets converted to NaN
//console.log(undefined > 0); // false, because undefined gets converted to NaN
//console.log(undefined < 0); // false, because undefined gets converted to NaN
//console.log(undefined >= 0); // false, because undefined gets converted to NaN

// === is used to compare the value and type of the variable

console.log("2" === 2); // false, because the type is different