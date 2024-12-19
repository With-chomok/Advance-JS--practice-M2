// "use strict"
// const info =document.querySelector(".method");

// const h1 =document.createElement("h1");
// h1.textContent = "this is H1 tag";

// info.after(h1);



const myInfo = document.querySelector(".method");

const infoList = ["apple", "Orange", "Banana", "Mango", "Cocunut"];

const nodes = infoList.map((para) => {
    const li = document.createElement("li");
    li.textContent =para;
    return li;
})

myInfo.prepend(...nodes)
