//constructing array literal

let oneValue = [1,3,4,5,6,7];
let twoValue = [...oneValue,8,9,10]
console.log(twoValue);


//concatenating arrays
let  hablu = ["dipol", "jakir", "habib"];
let gablu = ["naoi", "jsfs", "akdj"];
let hablugablu = [...hablu, ...gablu]; //spread operatiors
console.log("they are two brothers:" + hablugablu);

// copying code 

let score = [34,45,67];
let worldCup = [...score]
console.log(worldCup);
