let person = class{
    constructor (name,email,password){
        this.name =name;
        this.email = email;
        this.password =password;

    }
}

let about = new person("dipol", "dipoldaschomok@gmail.com", "sdkfjakjdf")
console.log(about);

// first class citizen

function factory(dipolclass){
    return new dipolclass()
}
let greeting = factory(class{
    dayhi(){
        console.log("hello,dipol das chomok  ");
        
    }
})

greeting.dayhi();