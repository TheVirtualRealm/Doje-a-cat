function Dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numblegs = 4;
    
}

let terrier = new Dog('Rose', 'Peanut', 'white');{
console.log(ownersName + "has a" + color + "dog named" + dogsName);


}


let retriever = new Dog('Noah', 'Barbera', 'Black'); {
    console.log(ownersName + "has a" + color + "dog named" + dogsName);
    
}


    
function() { return ownersName + "has a" + color + "dog named" + dogsName }