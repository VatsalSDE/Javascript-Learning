// Summary of Data Types 

let useremail;

// Declaring Symbols

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id == anotherId)

// const bigNum= 123456789987654321n

// //(This is the big INt number)

const heroes=["Vatsal" , "Deepak" , "Varsha"] // arrays 

const myObj={
    name: "vatsal",
    age:19,
} //Object

// console.log(myObj);
// console.log(heroes);

const myFunction = function(){
    console.log("Helloworld");
} // Function

let var1=123 // number
let var2="123" // string 
let var3=Symbol('12345') // Symbol
let var4=null // Object
let var5; // Undefined
let var6=true // Boolean
let var7=Boolean // Function

/*console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof var7);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);*/

// Memory IN Javascript 
// For primitive data types(Stack Memory is used)
// For Non primiive data types(Heap memory is used)

let youtubename="vatsalcodes.com"
let youtube2=youtubename
youtube2="Vatsalrathicodes.com"

console.log(youtube2);
console.log(youtubename); // here the value wil not be changed because a copy was given and this is all processed in Stack memory 

let user1={
    name:"Vatsal",
    age :19,
}

let user2=user1
user2.name="Deepak"

console.log(user1.name)
console.log(user2.name) // Here the values will be changed because the reference of the object is given and the data is stored in heap 

// Note :- Primitive data types are stored in stack memory 
// Note :- Non Primitive data types are stored in heap memory 

