// const name ="Vatsal"
// const repoCount=50

// console.log(name + " " + repoCount + " value");
// console.log(`Hello my name is ${name} and i have a repo count of ${repoCount}`);                               

const gameName=new String('Vatsal - Rathi')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);        // will give the length of the string
// console.log(gameName.toUpperCase()); // will convert the string to uppercase
// console.log(gameName.charAt(3));     // will give the character present at the given index number
// console.log(gameName.indexOf('a'));  // will give the index number of the character present in the string of the first coming

// const newString=gameName.substring(1,5)
// console.log(newString);              // will give the substring of the defined (starting index, end index) but will give starting to end-1 index elements

const anotherString=gameName.slice(0,-3)
console.log(anotherString);          // this is same as substring only , but the only difference between this is that negative index can also be given which will start from end

// const newStringOne = "   Vatsal Deepak Rathi     "
// console.log(newStringOne.trim());       // the trim method will delete all extra white spaces from front and end from the string 

// console.log(gameName.replace('t','j'));     // this will replace the first only coming character declared with the replacement character
// console.log(gameName.replaceAll('t','j'))   // this will replace the all characters from the string declared inside the method

// console.log(gameName.includes('Vatsal'));  // this will check if the string includes the given string or character or not 

// console.log(gameName.split('-')); // this will split the string from between where the type of declared char is found and will display in the type of array 