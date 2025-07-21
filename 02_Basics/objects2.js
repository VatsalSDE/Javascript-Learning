const tinder_User = new Object()
tinder_User.id="123abc"
tinder_User.name="Vatsal"
tinder_User.loggedIn=false

// console.log(tinder_User);

const reg_User= {
    email:"vags@gmail.com",
    fullname:{
        userfullname : {
            firstname:"Vatsal",
            lastname:"Rathi"
        }
    }
}

// console.log(reg_User.fullname.userfullname.lastname);

// Combining Objects 

const obj1 ={
    1:"A",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"c"
}
const obj4 ={
    5:"d",
    6:"D"
}

// The objects can be merge together by using two ways using spread operator and using assign method
// let obj_merge ={...obj1,...obj2,...obj4}   
// console.log(obj_merge);
// let obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const users=[
    {
        email:"Vatsad@.com",
    },
    {
         name:null,                           // making object inside the array 
    },
    {

    },
]
// console.log(users[0])

// console.log(tinder_User);
// console.log(Object.keys(tinder_User));   // for fetching the keys from the object
// console.log(Object.values(tinder_User)); // for fetching the values from the object
// console.log(Object.entries(tinder_User)); // for fetching the entries of the object

// console.log(tinder_User.hasOwnProperty("loggedIn"));  // This is very important  check whether it has the id as given or not

const course = {
    course_name:"Js In Hindi",
    course_price:"999",
    course_instructor:"Hitesh Chaudhary"
}

const {course_instructor:inst}=course // This is called destructuring of the objects  
console.log(inst);

//Small React
// const navbar = ({company}) => {

// }

// navbar(company = "Vatsal")

// Now coming to the point of API

// This is json it can be said that it is a object only
// {
//   "name":"Vatsal",
//   "coursename":"js in hindi ",
//   "price":"it is free"
// }

// the api can also be in the form of array
[
    {},
    {},
    {}
]
// we learn about json and all 