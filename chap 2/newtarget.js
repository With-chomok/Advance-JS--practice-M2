function person(name){
    if(!new.target){
        throw "must use new target operator with this function";
    }
    this.name =name;
}
let myPerson = new person("dipoldaschomok")
console.log(myPerson);
