let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString()); //converting the date to string
// console.log(myDate.toDateString()); // converting to date only
// console.log(myDate.toLocaleString()); // gives the date and time of local like of india 
// console.log(typeof myDate); //date is a object

// let mycreatedDate=new Date(2025,1,15,5,6) // Month start with 0 in javascript 
// console.log(mycreatedDate.toLocaleString());

// let mystamp = Date.now()
// let mynewDate= new Date("01-15-2023")
// console.log(mynewDate.toLocaleString());

// console.log(mystamp); // this will give in milliseconds
// console.log(mynewDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date();
// console.log(newDate.toLocaleDateString());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:
})

console.log(newDate);
