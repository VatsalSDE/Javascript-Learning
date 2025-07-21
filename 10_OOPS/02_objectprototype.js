// Javascript is a prototypal behaviour language

// array --->>>> Object --->>> null
// string --->>> object---->>> null
// Everything is object in javascript 


// function kuchbhi(num){
//     this.num=num
//     return num*5
// }

// console.log(kuchbhi(5));
// console.log(kuchbhi.prototype);

function createUser(username , score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

// here proto types are used for memory optimization
createUser.prototype.printme=function(){
    console.log(`price is ${this.score}`);
}

const chai=new createUser("Chai",25)
const tea=new createUser("tea",250)

// // this will explain the importance of new keyword

chai.increment()
chai.printme()