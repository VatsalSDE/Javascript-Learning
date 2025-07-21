// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
// Math.PI=5
// console.log(Math.PI);
// const mynewbj= Object.create(null)

const chai={
    name:"Wagbakri",
    price:30,
    isAvailable:true,

    orderchai:function(){
        console.log("Chai nahi banni");
    }
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{  // here we have defined theproperties of name in chai so now its not access to edit pr write 
    // writable:false,
    enumerable:false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof(value)!== 'function')
    console.log(`${key}:${value}`);
}