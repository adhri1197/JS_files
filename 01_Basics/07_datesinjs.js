//Dates 

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString()); // to get 
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toDateString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 3, 23,)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2024, 3, 23, 2, 39)
let myCreatedDate = new Date("03-24-2024")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.round(Date.now()/1000));




let newDate = new Date()
console.log(newDate.getDate()+ 2);
console.log(newDate.getDay());
console.log(newDate.getFullYear());



newDate.toLocaleString('defult',{
    weekday: "long",
    era: "short"

})

console.log(newDate);




