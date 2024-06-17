"use strict"; //treat all JS code as newer version ES6

//Primitive Data Types
let name = "anirudh"; //string
let age = 25; //number 2 to power 53 
let isLOggedIn = true; //boolean true or false
let bigint = 1234567890123456789012345678901234567890n; //bigint
let salary = 12345.67; //float
let ouSideTemp = null; //null stands for no value
let account1; //undefined stands for no value
let symbol = Symbol("symbol"); //symbol to find unique value
let object = {}; //object

// console.log(typeof null, typeof account1, typeof symbol); //null is object, undefined is undefined, symbol is symbol


// Non Primitive Data Types

const heros = ["saktiman" , "thor", "spiderman"]; //array

 let myObj = {
    name:"anirudh",  // object
    age: 25
}
   const myFuntion = function(){
    console.log("this is function")}; //function

    console.log(typeof heros ); 

    /******************************************************************* (MOMERY)*****************************************************************************/

      // Stack Memory is used in Premitive Data Types
      // Heap Memory  is used in Non Premitive Data Types


let myName = "anirudh";

let anotherName = myName;

console.log(myName);

anotherName = "kumar";

console.log(myName);
console.log(anotherName);

let user1 = {
   email: "one.com",
   upi: "one@ok"
}

let user2 = user1;

user2.email = "two.com";

console.log(user1.email);
console.log(user2.email);