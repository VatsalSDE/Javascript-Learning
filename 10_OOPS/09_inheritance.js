class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chaiaurcode= new teacher("Hemali","hem123.com","2345")
console.log(chaiaurcode);
console.log(chaiaurcode.addcourse());
console.log(chaiaurcode.logMe());

const masalachai=new user("Vatsal")
console.log(masalachai);
console.log(masalachai.logMe());

// here chaiaurcode and masalachai are not both equal because one is a defined as the instance of user and other of teacher 
console.log(chaiaurcode === masalachai)
console.log(chaiaurcode instanceof teacher) // yes true 
console.log(chaiaurcode instanceof user); // yes true because the teacher inherits all properties of user only through inheritance 