// const user = {
//     username: "Hitesh",
//     loginCount : 8,
//     isloggedin : true,
//     getUserDetails:function(){
//         console.log("Got User Details");
//         console.log(`Username : ${this.username}`);
//         console.log(this)  
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);

function user(username,loginCount,isloggedin){
    this.username= username
    this.loginCount=loginCount
    this.isloggedin=isloggedin

    this.greetings=function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userone= new user("hitesh",12,true)
console.log(userone);
console.log(userone.greetings());

const usertwo= new user("Vatsal",7,false)
console.log(usertwo.greetings());