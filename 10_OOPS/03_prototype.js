// let myName="Vatsal     "
// let mygchannel="Rathi     "
// console.log(myName.truelength);

// let myHeroes=["Modi","Trump","Nehru","Gandhi"]

// let heropower={
//     Modi:"Primt Minister",
//     Trump:"USA",
//     Nehru:"India",
//     Gandhi:"Nation",

//     getmodiPower:function(){
//         console.log(`Modi Power is ${this.Modi}`);
//     }
// }

// Object.prototype.vatsal=function(){
//     console.log("Vatsal is presnt in all objects");
// }

// Array.prototype.heyvatsal=function(){
//     console.log("Vatsal is present in all Arrays")
//}
// because here we have given the prototype to only arrays so it will be accesible with arrays only not object

// but when we give the power (prototype) to objects then it is accessible by all because it is the upmost hierarchy


// This makes the vatsal function accessible to all objects and arrays 
// heropower.vatsal()

// myHeroes.vatsal()
// myHeroes.heyvatsal()
// heropower.heyvatsal()  This is not accessible 
// heropower.vatsal()

// Inheritance

// const user={
//     name:"Vatsal",
//     email:"Chai@google.com"
// }

// const teacher={
//     makeVideo:true
// }

// const techingsupport={
//     isAvailable:false
// }

// const TASupport={
//     makeAssisgnement:"Js Assignment",
//     fultime:true,
//     __proto__: techingsupport
// }

// teacher.__proto__=user

// // New Approach modern Syntax

// Object.setPrototypeOf(techingsupport,teacher)


let anotherusername ="VatsalRathi"
String.prototype.truelength=function(){
    console.log(`${this}`), // here this will print the string or username passed to the prototype function
    console.log(`True length is : ${this.trim().length}`);
}
anotherusername.truelength()
"Vatsal  ".truelength()
"Bhavesh  ".truelength()