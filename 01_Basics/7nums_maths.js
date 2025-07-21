// Talking about numbers in javascript 

const score=400
// console.log(score);

const balance=new Number(400.5)
const gst= balance+ ((9/100) * balance)
// console.log(gst)
// console.log(gst.toString().length);
// console.log(gst.toFixed(2))     // this will fix the number to desired decimal places only as here till 2 decimal places onl by rounding off like 4.345 will become 4.35

// const othernumber=123.2499
//  console.log(othernumber.toPrecision(3)); // this will set the number till given digits only by starting from the non decimal part only like 12.345 will become 12.4

// const hudreds = 1000000
// console.log(hudreds.toLocaleString()); // this will form the numeric value in the desired local form like in india 1000000 is written as 10,00,000 and in america is like 1,000,000

// Talking about Maths in javascript 
// console.log(Math);
// console.log(Math.abs(-4)) // will give the positive value of the number 
// console.log(Math.round(5.5)) // will round of the number as of general maths like if n>=5 so +1 else n<5 so n itself like 4.2 will be 4 and 4.8 will be 5
// console.log(Math.ceil(4.2))  // this will strictly round off the number by +1 regardless of any value like 4.2 will be 5 only
// console.log(Math.floor(4.8)) // this will strict not +1 the if the n>=5 like 4.8 will be 4 only

// console.log(Math.pow(2,3)) // will give the power value like pow(2,3) will give 8
// console.log(`The square root of 25 is ${Math.sqrt(30)}`); //wiil give square root of number like of 16 is 4

// console.log(Math.random());  // gives random Values always comes between 0 to 1

// let randomNum=(Math.random()*10) +1
// console.log(randomNum);
// console.log(Math.floor(randomNum));

const min=1;
const max=6;
console.log(Math.floor(Math.random() *(max-min + 1)) + min) // this formula will be used for the random number in between certain limit only , this can be used for making dice game