//while loop 

let i = 0;
while (i <=10){
    console.log(`value of i is : ${i}`);
    //i++; one way to write the code
    i = i + 1; // another way to write the code

}

let myArray = ["Apple", "Banana", "Mango", "Orange"];
console.log(myArray.length);
let index = 0;
while (index < myArray.length){
    //console.log(`Value of index is : ${myArray[index]}`);
    index = index + 1;
}

let fruits = 11;// 

do {
    console.log(`value of fruits is : ${fruits}`); // this will print the value of fruits is 11 but in while loop it will not print the value of 11 because the condition is false but 
    // in do while loop it will print the value of 11 because the do while loop will execute the code first and then check the condition 
    fruits = fruits + 1;

}
while (fruits <= 10); 