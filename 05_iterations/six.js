// reduse the array to a single value

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mySum = Nums.reduce(function(accumulator, currentValue){
    console.log(`acci: ${accumulator}, curr: ${currentValue}`)
    return accumulator + currentValue;
}, 0);

console.log(mySum);

// accumulator is the value that is returned by the function and is the value that is returned by the function
// currentValue is the current value of the array that is being processed
// 0 is the initial value of the accumulator

const Nums2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const mySum2 = Nums2.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(mySum2);

const shoppingCart = [
    {
        product: 'phone',
        price: 699
    },
    {
        product: 'screen protector',
        price: 29
    },
    {
        product: 'case',
        price: 19
    },
    {
        product: 'headphones',
        price: 49
    },

]

const totalAmmount = shoppingCart.reduce( (acc, product) => acc + product.price,0);
// const totalAmmount = shoppingCart.reduce( function(acc, product){
//  console.log(`acc: ${acc}, product: ${product.price}`);
//     return acc + product.price;
// },0);
console.log(totalAmmount);