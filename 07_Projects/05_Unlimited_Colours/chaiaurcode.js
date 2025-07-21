const randomColor = function(){
    const hex="0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index<6; index++) {
       color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalid;
const startChangingcolour=function(){
    if(!intervalid){
        intervalid =  setInterval(changeBgcolour,1000)
    }
    function changeBgcolour(){
        document.body.style.backgroundColor=randomColor();
    }
};

const stopChangingcolour=function(){
    clearInterval(intervalid);
    intervalid=null; // this we have made to free up the memory
};

document.querySelector('#start').addEventListener('click',startChangingcolour);


document.querySelector('#stop').addEventListener('click',stopChangingcolour);