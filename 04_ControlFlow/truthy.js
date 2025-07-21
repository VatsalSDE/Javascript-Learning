const userEmail = "vatsal@gmail.com"
const userno =[]
// if(userEmail) {
//     console.log("Got user Email");
// }
// else
// {
//     console.log("Don't Have User Email");
// }
// Falsy values are 
// false , 0 , -0, NaN , Null , Undefined , BigInt 0n , ""

// Some Truthy Values are 
// true , "0" , 'false' , " " , [] , {} , function(){}

// if(userno.length === 0){
//     console.log("Array is empty");
// }

const emptyobjec = {}

// if(Object.keys(emptyobjec).length===0)
// {
//     console.log("Object is empty");
// }
// Nullish Coalishing Operator (??) ; null , undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1= undefined ?? 10
val1 = 5 ?? null ?? 10 ?? 20

console.log(val1);

// Ternery operator 

// condition ? true :false

const ixeTeaprice =200

ixeTeaprice >=100 ? console.log("Price is greater than 100") : console.log("Price is lower than 100");
