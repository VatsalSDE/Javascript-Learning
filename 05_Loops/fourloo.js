const myobj = {
    js : 'javascript',
    cpp : 'C++',
    rb: 'Ruby on Rails',
    sb: 'Spring Boot'
}

for (const value in myobj) {
    console.log(value , ":" , myobj[value]);
}
// console.log();

// for (const key in myobj) {
//     console.log(key , ":", myobj[key]);
// }

// for (const key in myobj) {
//     console.log(`${key} :-  shortcut is for ${myobj[key]}`);
// }

const myarr = ["Java" , "Scala" , "Python" , "Ruby"]
for (const key in myarr) {
    console.log(key , myarr[key]);
}

// const map =new Map()
// map.set(400 , "India")
// map.set(300 , "Nepal")
// map.set(200 , "Pakistan")
// map.set(100 , "America")

// for (const key in map) {
//     console.log(key);
// }

// for in loop is not used for map because it  is not iteratable 

