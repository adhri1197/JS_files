const user = {
    username: "anirudh",
    email: "anirudh@one",
    signedIn: true,

    getUserInfo: function(){
        //console.log(`username: ${this.username}, email: ${this.email}, signedIn: ${this.signedIn}`);
        console.log(this); // this refers to the object itself (user) in this case
    }
}

console.log(user.getUserInfo());
console.log(this);// this refers to the global object (window) in this case the output will be node object
// we are in the global scope here so this refers to the global object in the window object in the browser and node object in the node environment

// In the above example, this refers to the object itself (user) in the getUserInfo method.

// In the global scope, this refers to the global object (window) in the browser and node object in the node environment.

function User (username,loginCount,email,isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.email = email;
    this.isSignedIn = isSignedIn
    this.greeting = function(){
        console.log(`welocome ${this.username}`);
    }

    return this
}

const userOne = new User("anirudh",88,'one@one',true)
const userTwo = new User('adhri',26,'adhri@two',false)
console.log(userOne.constructor);
console.log(userOne)
console.log(userTwo)