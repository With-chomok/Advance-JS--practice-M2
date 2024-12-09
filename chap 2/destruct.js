const person = {
    firstName:"dipol",
    lastName:"das",
    age:20,
    prof:"creator"
}
let {firstName, lastName, prof = "stydy"} = person; //default value
console.log(firstName)
console.log(lastName)
console.log(prof);

// string destructure


let str  = "welcome to our page"
let [a,b,c,d,e,] = str;
console.log(a,b,c,d,e,);

// array destruc
let fruits = ['apples','Mangoes','banana'];
let [fruits1,fruits2,fruits3] =fruits;
console.log(fruits3);
