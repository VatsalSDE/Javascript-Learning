"use strict";
const user={
    username:"Vatsal",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`); // This refers to the current context
        console.log(this);
    }
}
// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage()
// console.log(this);

// function lemon(){
//     let username="Vatsal"
//     console.log(this.username);
// }
// lemon()

const code = ()=> {                               // => this is called arrow function 
    let username = "vatsal"
    console.log(this.username);
    console.log(this);
}
code()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// const addtwo = (num1,num2) =>  num1 + num2 //This is called implicit return function
// const addtwo = (num1,num2) =>  (num1 + num2 ) // this method can also be used 

/* Note :-
When curly braces are used in functions so return statement is compulsory to write
and when parenthisis are used then no need to use the return statement

This is mostly used in react js
*/

// const addtwo = (num1,num2) =>  ({username :"Vatsal"}) // for returning the object in need to wrap the object inside the parnethisis
// console.log(addtwo(3,4))