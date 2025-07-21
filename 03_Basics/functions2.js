// Shopping cart is made in E-commerce platform

function calculate_cart_price(...num1){  // ... this 3 dots are only called rest opeartor and spread operator here it is called a rest operator
    
    return num1
}
// console.log(calculate_cart_price(4,23,245,667));

const user ={
    username: "Vatsal",
    price:2300
}

// function handle_object(anyobject){
//     console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
// }
// handle_object(user)

const mynewarr=[200,300,400,120]

function returnsecondvalue(array){
    console.log(`The second value of the array is ${array[2]}`);
}
returnsecondvalue(mynewarr)