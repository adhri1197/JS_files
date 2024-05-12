// singleton

//object literal
const mySym = Symbol('mykey');
const JsUser = {
    name: 'Anirudh',
    "full name": 'Anirudh Vardhan',
    [mySym]: 'myKey1',
    age: 25,
    email: 'one@.com',
    location: 'Firozabad',
    isLogggedIn: true,
    lastloginDays: ["Moday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

}
console.log(typeof JsUser.email); // its not a good practice to use this
console.log(typeof JsUser['email']) // its a good practice to use this
console.log(JsUser['full name']);
console.log(typeof JsUser[mySym]);

JsUser.email = 'two@.com';
//Object.freeze(JsUser);
JsUser.email = 'three@.com';
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS User All The Best');

}

JsUser.greetingTwo = function(){
    console.log(`hello JS User All The Best,  ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


//Objects Part 2

//const tinderUser = new Object(); // singletaon object
const tinderUser = {} // non singleton object

tinderUser.name = 'Anirudh';
tinderUser.age = 25;
tinderUser.Id = 'tinder123';
tinderUser.isLogggedIn = true;
tinderUser.location = 'Firozabad';

console.log(tinderUser);

//another way to create object

const newTinderUser = {
    email: 'one@.com',
    fullname:{
        userfullname:{
            firstName: 'Anirudh',
            lastName: 'Vardhan'
        },
        }
    }

console.log(newTinderUser.fullname.userfullname.firstName);

//Object.create

const obj1 = {1: 'one', 2: 'two'};
const obj2 = {3: 'three', 4: 'four'};
const obj3 = {5: 'five', 6: 'six'};

const obj4 = {...obj1, ...obj2, ...obj3};// first way to merge two objects

//const obj4 = Object.assign({}, obj1, obj2, obj3); // second way to merge two objects its not a good practice to use this
console.log(obj4);

const users = [
    {
        id: 1,
        email: 'one@.com',
    },
    {
        id: 1,
        email: 'one@.com',
    },{
        id: 1,
        email: 'one@.com',
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));


//Object part 3

const course = {
    courseName: 'JS Course',   
    coursePrice: 1000,
    courseDiscount: 10,
    courseInstructor: 'Anirudh',
}

const {courseInstructor: Instructor } = course
console.log(Instructor);


