function displayer(userdata){
    console.log(userdata);
    
}

function user(firstname,lastname,prof,age){
    firstname;
    lastname;
    prof;
    age;

    let info = firstname + " " + lastname + "," + prof + " " + age;
    return info;
}

let myInfo = user("dipol", "das", "programmer", 30)
displayer(myInfo)
