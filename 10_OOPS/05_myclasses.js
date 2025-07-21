// Every javascript is used after ES6

class user {
    constructor(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new user("Vatsal","ds0@gma.com","2345")
// console.log(chai);
// console.log(chai.encryptPassword()); // this will give the encrypted password like 2345abc for 2345
// console.log(chai.changeusername());  // this will change the username to uppercase like vatsal will become VATSAL

// Behind the scenes 
function User(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("teaman","tea0@gma.com","2345")
console.log(tea.encryptPassword());
console.log(tea.changeusername());