function SetUserName(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    // SetUserName(username) // actually this is not calling
    SetUserName.call(this,username)
    this.email=email
    this.password=password
}

const user= new createUser("Vatsal","chai@gmail.com","123")
console.log(user);