class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }

    static createID(){
        return `123`
    }
}
const vatsal=new user("Vatsalrathi")
// console.log(vatsal.createID()) // this will not work because the create ID function is made static so it is accessible only in the class only but not at the instance or refefrnce 
// console.log(vatsal.logMe());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("13pro","apple.com")
console.log(iphone);
console.log(iphone.logMe());
// console.log(iphone.createID()); // This will not work because it is a static method