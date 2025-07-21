const myarray=[1,2,3,4,5,6];

// This is called the reduce method first the accumulator is the initial value only, then the accumulator becomes the sum of previous accumulator + currentvalue
// const initial_value=0
// const sum_With_Initial=myarray.reduce((accumulator , currentvalue) =>{
//     console.log(`accumultaor : ${accumulator} and the cuurentvalue is : ${currentvalue}`);
//     return accumulator+ currentvalue
// },initial_value)   // this method  is by using the functions simply
// console.log(sum_With_Initial);

// now by using the arrow functions
// const sum_With_Initial=myarray.reduce((acc,cuurval) => (acc + cuurval), initial_value)
// console.log(sum_With_Initial);

const shopping_cart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:3999
    },
    {
       itemname:"java course",
       price:1999
    }
]

const total_price = shopping_cart.reduce((acc, item) => (acc + item.price) , 0)
console.log(total_price);