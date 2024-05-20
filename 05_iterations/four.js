 const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 // using filter method to filter the value of the array

 //const myNums = Nums.filter( (num) => num > 5); // in this function you can choose were you want to filter the value of the array 
 const myNums = Nums.filter( ( num ) => { // this is the same as the above function but in the different way
    return num > 5;
    
 })
    console.log(myNums);// this will print the value of the array which is greater than 5 



// using for each method to print the value of the array

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNewNums = [];

newNums.forEach( ( num) => { // this will loop through the array and check if the value of the array is greater than 2
    if (num > 2){
        myNewNums.push(num); // this will push the value of the array which is greater than 2
    }
})
console.log(myNewNums); // this will print the value of the array which is greater than 2


const books = [
    {title: 'Book 1', author: 'John Doe', genre: 'Non-fiction', rating: 4.5},
    {title: 'Book 2', author: 'Jane Doe', genre: 'Fiction', rating: 4.0},
    {title: 'Book 3', author: 'adhri', genre: 'Fiction', rating: 4.8},
    {title: 'Book 4', author: 'Jane Doe', genre: 'Fiction', rating: 4.2},
    {title: 'Book 5', author: 'Anirudh Doe', genre: 'Non-fiction', rating: 4.7},
    {title: 'Book 6', author: 'Jane Doe', genre: 'Fiction', rating: 4.1},
    {title: 'Book 7', author: 'Anirudh Doe', genre: 'Fiction', rating: 4.6},
    {title: 'Book 8', author: 'John Doe', genre: 'Non-fiction', rating: 4.3},

];
let  userData = books.filter ( (bk) => bk.genre === 'Fiction' ); // this will filter the value of the array which is greater than 4.5

userData = books.filter( (bk) => { 
    return bk.rating >= 4.5 && bk.author === 'Anirudh Doe'}); // this will filter the value of the array which is greater than 4.5 and the genre is Non-fiction
console.log(userData); 
