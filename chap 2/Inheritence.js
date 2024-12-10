class car {
    constructor(brand){
        this.brand;
    }
    parant(){
        return "my car brand is:" + this.brand;
    }

}
class Model extends car {
    constructor(brand,Model){
        super(brand);
        this.model;

    }
    show(){
        return this.parant() + "And Model is:" +this.model;

    }
}
let myCar = new Model("Ford", "Mostak");
console.log(myCar.show());
