const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums =mynums.map((num) => {return num + 10})
// console.log(newnums);

// const newnums =mynums.forEach((element) => {console.log(element + 10);
// });

// Thhe example given below is the example of chaining of methods 
const newnums = mynums.map((num) => num * 10)
                      .map((num) => num + 1)
                      .filter((num) => num >= 40)

console.log(newnums);