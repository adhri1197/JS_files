// control flow is the order in which the computer executes statements in a script 

// if statement

 if(2 === 3){
     console.log("Executed");
 }
 else{
     console.log("Not Executed");
 }

// < > <= >= == === != !==  these are the comparison operators 


// another example

const temperature = 25

if(temperature <= 0){
    console.log("Freezing");
}
else if(temperature <= 20){
    console.log("Cold");
}

else if(temperature <= 30){
    console.log("Normal");
}

else{
    console.log("Hot");
}

//another example

const score = 55

if(score <= 60){
    let grade = "F";
    console.log(`You got ${grade} grade Failed`);
}

else if(score <= 70){
    let grade = "D";
    console.log(`You got ${grade} grade Average`);
}

else if(score <= 80){
    let grade = "C";
    console.log(`You got ${grade} grade Good`);
}

else if(score <= 90){
    let grade = "B";
    console.log(`You got ${grade} grade Very Good`);
}

else{
    let grade = "A";
    console.log(`You got ${grade} grade Excellent`);
}

// another example

const userLoggedIn = true
const debitCard = true
const loggedInFromMobile = true
const loggedInFromEmail = false

if(userLoggedIn && debitCard){
    console.log("You can make a payment");
}

if( loggedInFromEmail || loggedInFromMobile ){
    console.log("You can access your account");
}
