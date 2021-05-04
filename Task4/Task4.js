
class Animal {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    getName = function () {
        return this.name;
    }
    getWeight = function () {
        return this.weight;
    }
    setName = function (name) {
        this.name = name;
    }
    setWeight = function (weight) {
        this.weight = weight;
    }
    toString = function () {
        return " Animal name :" + this.name + ", Animal Weight " + this.weight;
    }
}


let objAnimal1 = new Animal("Elephant",45.6);

objAnimal1.toString();
document.write(objAnimal1.toString());

let objAnimal2 = new Animal("Name","???");
objAnimal2.setName("Mouse");
objAnimal2.toString();
console.log(objAnimal2.toString());
