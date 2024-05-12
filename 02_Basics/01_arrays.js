const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ['Batman, Superman, Ironman'];

const myNewArray = new Array(0, 1, 2, 3, 4, 5); // Another way to create an array

console.log(myArray[2]);


//Array Methods

myArray.push(6); // push() method adds an element to the end of the array
console.log(myArray);

myArray.pop();// pop() method removes the last element from the array
console.log(myArray);

myArray.unshift(9); // unshift() method adds an element to the beginning of the array
myArray.shift(); // shift() method removes the first element from the array
console.log(myArray);

console.log(myArray.includes(7)); // includes() method checks if the element is present in the array
console.log(myArray.indexOf(3))


const newArray = myArray.join(); // join() method converts the array into a string

console.log( myArray);
console.log(newArray);



// Array part 2

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
const vegetables = ['Carrot', 'Potato', 'Tomato', 'Onion', 'Garlic'];

//const bothconst = fruits.concat(vegetables); // fruits.concat(vegetables); (mix both arrays)
//console.log(bothconst);

const allItems = [...fruits, ...vegetables]; // fruits.concat(vegetables); (mix both arrays)
console.log(allItems);

const allItems2 = [...fruits, 'Watermelon', ...vegetables]; // fruits.concat(vegetables); (mix both arrays)
console.log(allItems2);

const allItems3 = [...fruits, 'Watermelon', ...vegetables, 'Cucumber']; // fruits.concat(vegetables); (mix both arrays)
console.log(allItems3);

const anotherArray = [1,2,3,[4,5,6],7,8,9,[1,0,1],1,[1,2,[1,2,4]]] // Nested Array

const flatArray = anotherArray.flat(Infinity)// flat() method converts the nested array into a single array
console.log(flatArray);


// Array part 3 data scraping

console.log(Array.isArray("Hello World")) // isArray() method checks if the given value is an array or not
console.log(Array.from("Hello World")) // from() method converts the string into an array
console.log(Array.from({name: 'John'})) // from() method converts the object into an array

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3)) // of() method converts the given values into an array
