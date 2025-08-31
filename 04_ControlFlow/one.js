// if statement
// const isUserloggedIn=true

// if(isUserloggedIn){
//     console.log("Hello User");
// }
// if("2"===2){
//     console.log("Hello pajji");
// }

// let temperature =40;
// if(temperature<40){
//     console.log("Today is not a sunny day");
// }
// else if(temperature==40){
//     console.log("today is a proper day");
// }
// else{
//     console.log("Today is a sunny day ");
// }

// const score =200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);    // here the power can not be used and will throw the error because it is declared in the functional scope 

// const balance = 1000
// if(balance > 500) console.log("Test"),console.log("Hello");  // This is a very bad practice of writing the code by using commas and without declaring the scope 

// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if (balance < 750) {
//     console.log("Less tha 750");
// }
// else if (balance < 900) {
//     console.log("Less than 900");
// }
// else {
//     console.log("Balance is less than 1200 you are rich");
// }

const userloggeddIn = true
const debicard = true
const loggedInfromGoogle = false;
const loggedInfromEmail = true
if(userloggeddIn && debicard){
    console.log("User is good to goo for the courses");
}
else{
    console.log("User is not allowed to log in ");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User is allowed to get into the course ");
}