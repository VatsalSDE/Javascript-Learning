// const promiseOne =  new Promise(function(resolve,reject){
//     // Do an async task like
//     // Database calls , Cryptography , Network calls
//     setTimeout(function() {
//         console.log(("Async await is complete"));
//         resolve()
//     }, 3000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("ASync task 2");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Async to resolved");
// })

// const promisethree = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve({Username : "Chai" , email:"chai@gmail.com"})
//     },3000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Vatsal" ,  password:"2345"})
//         }
//         else{
//             reject('ERROR : Something went wrong')
//         }
//     },1000)
// })

// promisefour.then(function(user){
//     console.log(user)
// })

// promisefour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .catch(function(error){
//     console.log(error);
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Vatsal" ,  password:"2345"})
//         }
//         else{
//             reject('ERROR : Something went wrong')
//         }
//     },1000)
// })

// promisefive
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is already resolved or rejected")
// )

const promisesix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Javasript" ,  password:"2345"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromisesix(){
    try{
        const response = await promisesix
    console.log(response.username);
    }
    catch(error){
        console.log(error);
    }
}

// consumePromisesix()

// async function getAllUsers() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))

// fetch('https://randomuser.me/api/')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))