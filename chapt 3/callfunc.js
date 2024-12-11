// call method

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};


const person2 = {
    firstName: "dipol",
    lastName:"das"
}

const valueAdd = person.fullName.call(person2);
console.log(valueAdd);


// apply method