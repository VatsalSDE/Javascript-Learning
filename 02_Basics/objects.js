// Object can be declared in many ways like Singleton, constructors , literals 
const sym=Symbol("Key1")
// Object literals
const vsuser = {
    name: "Vatsal",
    "fullName":"Vatsal Rathi",
    age: 19,
    [sym]:"Mykey1",
    location: "Vadodara" ,
    email: "vatsal@tcs.com",
    isLoggedIn:true,
    lastloginDays: ["Monday","Saturday"]
}  // The curly braces are the objects only 

// How to acccess the objects

//1 method is like 
// console.log(vsuser);

// console.log(vsuser.email);


// 2nd method is 
// console.log(vsuser["isLoggedIn"]); // at the back it is a string
// console.log(vsuser["fullName"]);
// console.log(typeof vsuser["isLoggedIn"]);

// vsuser.email="rathi@infosys.com"
// Object.freeze(vsuser)                   // the freeze method will make the object value un editable 
// vsuser.email="rathi@microsoft.com"
// console.log(vsuser);

vsuser.greeting= function(){
    console.log("Hello VS User");
}
vsuser.greetingtwo = function(){
    console.log(`Hello VS User , ${this.email}`);  // This is called string interpulation 
}
console.log(vsuser.greeting());

console.log(vsuser.greetingtwo()); // this all was making functions with objects 
