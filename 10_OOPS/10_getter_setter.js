class user {
    constructor(email,password) {
        this.email=email;
        this.password=password;
    }

    get password(){
        return `${this._password}vatsal` // for encrypting password
    }

    set password(value){
        this._password=value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){                           // setters never return and getters always return 
        this._email=value.toUpperCase()
    }

    // get and set both are used only one cannot be used 
}

const vatsal=new user("ds0123.com","abcd")
console.log(vatsal.password);
console.log(vatsal.email);