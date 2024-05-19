// for of thies are array specific loops

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    console.log(num);

}

let massege = "Hello World";

for (const msg of massege) {
   // console.log(`The value of msg is : ${msg}`)

}


//Map
//Array

const myMap = new Map();
myMap.set('IND', 'India');
myMap.set('USA', 'United States of America');
myMap.set('UK', 'United Kingdom');
myMap.set('AUS', 'Australia');
myMap.set('IND', 'India'); // this will not add the value in the map because the key is already present in the map 

//console.log(myMap);

for (const [key, value] of myMap) {
    //console.log(key, '->', value);
    
}

//Object

const myObj = {
    'name': 'Anirudh',
    'age': 26,
}

for (const [key, value] of Object.entries(myObj)) { // this will convert the object into the array and then we can use the for of loop 
    //console.log(key, '->', value);
    
}

for (const key in myObj) {
    //console.log(`${key} the value is : ${myObj[key]}`); // this will print the key and value of the object in another way by using FOR IN loop
   
    }


let programming = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin'];

for (const key in programming) {
   //console.log(programming [key]); // this will print the value of the array in another way by using FOR IN loop
    }

    // FOR EACH LOOP

const coding = ['js', 'css'];

coding.forEach( function (val){
    //console.log(val);
})

// FOR EACH LOOP WITH ARROW FUNCTION
coding.forEach( val => {
    //console.log(val);
})

function print(val){
    console.log(val);
}

coding.forEach(print);

const myCoding = [
    {
        'name': 'JavaScript',
        'type': 'Frontend'
    },
    {
        'name': 'Python',
        'type': 'Backend'
    },
    {
        'name': 'Java',
        'type': 'Backend'
    },
    
    
]

myCoding.forEach( (item) => {
    console.log(item.name, '->', item.type);// this will print the name and type of the object in the array
    console.log(item.type); // this will print the type of the object in the array
})