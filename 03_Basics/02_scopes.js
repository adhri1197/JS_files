let a = 1000
const b = 2000
if (true) {
    let a = 10 
    const b = 20
    //var c = 30 // thats why we use let and const because var is not block scoped and it can be accessed outside the block scope as well 
    console.log("inner:",a,b);
}


console.log(a); // its not gonna print 1000 because of the block scope
console.log(b); // its not gonna print 20 because of the block scope
//console.log(c); // 


// neasted  scope

function one(){
    const username = "Anirudh";

    function two(){
        const website = "anirudhvardhan.com";
        console.log(username, website);
    }
    //console.log(website); // it will throw an error because website is not defined in the scope of function one

    two();
}

one();

if (true) {
    const name = " Anirud ";
    if (true) {
        const website = "anirudhvardhan.com";
        console.log(name + website);
    } 
    //console.log(website); // it will throw an error because website is not defined in the scope of the if block
}

//console.log(name); // it will throw an error because name is not defined in the global scope



console.log(addone(6));
function addone(num){
    return num + 1;
}


addtwo(9);
//const addtwo = function(num){ // it will throw an error because addtwo is not defined before calling it remove const and it will work fine
    return num + 2;
//}

