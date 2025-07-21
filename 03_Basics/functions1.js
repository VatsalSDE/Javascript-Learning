function sayMyname(){
console.log("V");
console.log("a");
console.log("t");
console.log("s");
console.log("a");
console.log("l");
}

// sayMyname()

// function addtwono(a,b){ // this is called parameters 
//     let sum=0
//     sum = a+b
//     return sum
// }

// const sum=addtwono(5,8) // This is arguments 
// console.log(sum);

// function addno(number_1, number_2){
//     // let result=number_1+number_2
//     // return result
//     return number_1 + number_2
//  }
// let result =addno(5,3)
// console.log("Result of 5 and 3 addition is :  "+ result);

function loginusermessage(username)
{
    if( username === undefined){
        console.log("Please enter the username");
        return
    }
    return`${username} just logged in`
}
console.log(loginusermessage("vatsal"));
console.log(loginusermessage());