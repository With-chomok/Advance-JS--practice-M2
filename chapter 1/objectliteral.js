function sayHi ( username, userinfo){
    return {
        username,
        userinfo
    }
}
console.log(sayHi("dipol", "student at hablu programmer"));

// step2

let message = "hi, jp !",
    userNAME = "dipol"

    const MyInfo = {
        message,
        userNAME
    }
console.log(MyInfo);


//step 3

let name = "DIpol";
let Info = {
    [name]: "he is junior programmer",

}
console.log(Info);
//step 4


let server = {
    name : "server side",
    restart(){
        console.log("this is consis method");
        
    }
}
console.log(server.restart());
