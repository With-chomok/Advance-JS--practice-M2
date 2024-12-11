// A promise is an object that links producing code and consuming code 


let message = false;
 let myPromise = new Promise((resolve, reject)=>{
if(message){
    resolve([
        {username:"dipol", age:20, prof:"programmer"},
        {username:"chomok", age:40, prof:"creator"}
    ])
}else{
    reject("you are not bd, so get out")
}
})

myPromise.then((success) =>{
    console.log(success);
    
})
myPromise.catch((error)=>{
    console.log(error);
    
})
