const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const myNewNums = myNums.map( (num)=> {return num * 2;}); // this will multiply the value of the array by 2
const myNewNums = myNums.map( (num) => num * 2); // this is the same as the above function but in the different way

console.log(myNewNums);


const Nums  = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Numbers = Nums
                .map( (num) => num * 5)
                .map( (num) => num - 4)
                .map( (num) => num / 2)
                .filter( (num) => num >= 30)

console.log(Numbers);


