// for loop 
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


for (let i = 0; i <= 20; i++) {
    console.log(`Outerloop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Innerloop value: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i * j); // multiplication table 

    }
    
}

let myArray = ["Apple", "Banana", "Mango", "Orange"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
// break and continue

// BREAK 
 for (let i = 2; i < 10; i++) {
   // console.log(i);// 2 3 4 5 6 7 8 9 
   //another way to write the above code
   //console.log(`Value of i is : ${i}`);// this will print the value of i with the string

 }

 for (let i = 1; i < 10; i++) {
    if (i == 5){
        console.log(`Value is find 5`);
        break
    }
    console.log(`Value of i is : ${i}`);
 }

 // CONTINUE

 for (let i = 1; i < 10; i++) {
    if (i == 5){
        console.log(`Value is find 5 `);
        continue
    }
    console.log(`Value of i is : ${i}`);
 }