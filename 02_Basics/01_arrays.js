const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ['Batman, Superman, Ironman'];

const myNewArray = new Array(0, 1, 2, 3, 4, 5);

console.log(myArray[2]);


//Array Methods

myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(9);
myArray.shift();
console.log(myArray);

console.log(myArray.includes(7));
console.log(myArray.indexOf(3))


const newArray = myArray.join();

console.log( myArray);
console.log(newArray);

//slice, splice

