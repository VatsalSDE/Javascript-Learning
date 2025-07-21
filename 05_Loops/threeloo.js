// Array specific loops 

// ~for of loops 
// const myarr =[1,23,3,4,55];
// for (const x of myarr) {
//     console.log(x);
// }
// console.log("");

// const greetings ="Hello Vatsal"
// for (const greet of greetings) {
//     console.log(greet);
// }
// Maps 
const map =new Map()
map.set(400 , "India")
map.set(300 , "Nepal")
map.set(200 , "Pakistan")
map.set(100 , "America")
map.set(399 , "India")

 // map is used for unique value pairs only and it don't hold duplicate value pairs 
// console.log(map);

for (const [m , value] of map) {
    console.log(m,":-",value);  
}

const myobj ={
    'game 1': 'NFS',
    'game 2': 'batman'
}

// for (const [key,value] of myobj) {
//     console.log(key , ':-' ,value);
// } // so object is not iteratable in the for of loop 