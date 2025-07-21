const user={
    _email:"123.com",
    _password:"abc13",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea=Object.create(user)

console.log(tea.email);