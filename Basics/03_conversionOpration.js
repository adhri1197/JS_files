//let score = "100"; // this value is string => "100"

//let score = "100acd"; // assign a new value to the existing 'score' variable with alphabets => "NaN"

//let score = null; // assign a new value to the existing 'score' variable with null => 0

//let score = undefined; // assign a new value to the existing 'score' variable with undefined => NaN


let score = true; // assign a new value to the existing 'score' variable with boolean true => 1 , FALSE => 0

console.log(typeof (score)) // this value is in string format but i want to convert it into number format

let valueInNumber = Number(score); // Number is used to convert string to number
console.log(typeof (valueInNumber));
console.log(valueInNumber); // it will display NaN because the value is not in number format

//let isLoggedIn = 1 // this value is number => 1 if we use string it will be "1" or "true"

let isLoggedIn = 0 // this value is number => 0 or false if we use string it will be "0" or "false"

let booleanIsLoggedIn = Boolean (isLoggedIn); // Boolean is used to convert any value to boolean
console.log(booleanIsLoggedIn); // it will display true because the value is true



let stringNumber = "100"; // this value is string => "100"
console.log(typeof (stringNumber)) // this value is in string format but i want to convert it into number format
console.log(stringNumber); // it will display 100 because the value is in number format 





//**********************************************************************OPERATIONS******************************************************************************************************* */

let value = 100;
let negValue = -value;
console.log(negValue); // it will display -100 because the value is negative 


console.log(+ true);
console.log(+ false);

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3); // it will display 4 4 4 because the value is same


let gameCounter = 100;
//gameCounter++; //prefix increment
++gameCounter; //postfix increment
console.log(gameCounter); // it will display 101 because the value is incremented by 1