const promiseOne = new Promise(function(resolve, reject){ // Promise is a constructor function that takes a function as an argument
    setTimeout(function(){
        console.log('Async task is completed'); // resolve is a function that is called when the async task is completed
        resolve(); // This will not be executed as the promise is already resolved
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise is resolved');
})

// Another way to create a promise

new Promise(function(resolve, reject){ // Promise is a constructor function that takes a function as an argument
    setTimeout(function(){
        console.log('Async task 2 is completed'); // resolve is a function that is called when the async task is completed
        resolve(); // This will not be executed as the promise is already resolved
    }, 1000);
})

.then(function(){
    console.log('2 Promise is resolved');
})

// third promise
new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'Anirudh', age: 26})
    },1000)
})

.then(function(data){
    console.log(data);
})

// fourth promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name: 'Anirudh', email: 'ani@exaple,com'});
        }
        else{
            reject('Error: Something went wrong');
        }
    },1000)
})
.then((userData)=>{
    console.log(userData);
    return userData.email;
})
.then((email)=>{
    console.log(email);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Promise is settled');
})

// Fifth promise
const newPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Adhri', email: 'ani@exaple,com'});
        }
        else{
            reject('Error: JS Error');
        }
    },1000);
});

async function consumenewPromise(){
    try {
        const response = await newPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumenewPromise();

// Sixth promise with Await and Fetch
// async function getAllusers(){
//    try {
//     const response = await fetch('https://api.github.com/users/adhri1197')
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E:",error);
    
//    }
// }
// getAllusers();
 // wiyh then and catch

 fetch('https://api.github.com/users/adhri1197')
 .then ((responce)=>{
    return responce.json();
 })
.then ((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
