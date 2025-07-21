coding = ["js","ruby","javascript","python","cpp"];
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);
// with this we can see that the for each values do not return any values 

const score =[12,30,34,15,56];

// const new_Score = score.filter((run) => run>=30)
// console.log(new_Score);

// const new_Score = score.filter((run) => {
//     return run>30
// } )
// console.log(new_Score);

// const newScore =[]

// score.forEach((run) => {
//     if(run>30){
//         newScore.push(run)
//     }
// })

// console.log(newScore);

// the all three are same implicit and explicit
const books = [
    {
        title:'Book one' , subject:'Java' , publish:1970
    },
    {
        title:'Book two' , subject:'Python' , publish:1970
    },
    {
        title:'Book three ' , subject:'Fullstack Web Development' , publish:1971
    },
    {
        title:'Book  four' , subject:'Machine Learning' , publish:1975
    },
    {
        title:'Book  five' , subject:'Fulstack Web Development' , publish:1972
    },
    {
        title:'Book six' , subject:'DSA' , publish:1973
    },
    {
        title:'Book seven' , subject:'Fullstack Web Development' , publish:1975
    },
    {
        title:'Book eight' , subject:'Ruby on Rails' , publish:1975
    }
];

// let user_Books=books.filter((bk) => bk.subject==='Fullstack Web Development' )

user_Books = books.filter((bk) => {
    return bk.publish>=1975 && bk.subject=='Machine Learning'})
console.log(user_Books);