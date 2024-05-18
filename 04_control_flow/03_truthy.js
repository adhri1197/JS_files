// falsy values
// false , 0, -0,  BigInt 0n, "", null, undefined, NaN, document.all 

// truthy values
// true, 1, -1, BigInt 1n, "0", " ", [], {}, function(){}, new Date(), document.all



const userEmail = []

if (userEmail) {
    console.log("You are logged in");
}
else{
    console.log("Please log in");
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator

let val1; 
 //val1 = null ?? 18; // if the value is null then it will print the value after ?? 
 //val1 = 0 ?? 18; // if the value is 0 then it will print the value after ??
 val1 = undefined ?? 18; // if the value is undefined then it will print the value after ??
 val1 = null ?? 10 ?? 14; // if the value is null then it will print the value after ?? and if the value after ?? is also null then it will print the value after ??

console.log(val1 ?? "Value is not defined");// we use ?? to check if the value is defined or not if its not defined then it will print the value after ??S

//Terinary Operator

const age = 15
const isAdult = age >= 18 ? "Adult = True" : "Adult = False";
console.log(isAdult);