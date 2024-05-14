function addtwoNumbers(a, b) {
    //let result = a + b;
    //return result;// if we add return here, then the function will return the value and will not execute the next line 
    return a + b;
}

const result = addtwoNumbers(2, 3);
console.log('Result', result); 

// function for login user 

function loginUserMessage(username = "anirudh"){
    if(!username){ // if username is not provided then it will return this message
        console.log('Please provide a username');
        return;
    }
    else if(typeof username !== 'string'){ // if username is not a string then it will return this message
        console.log('Please provide a valid username');
        return;
    }
    return `${username} is logged in`;
}

console.log(loginUserMessage('anirudh'));
