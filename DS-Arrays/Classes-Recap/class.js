//reference type
//--Example: objects are references to memory 
//-- [] === [] will return false
if([] === []) console.log("true");
else console.log(false);

//context
const object = {
    a: function(){
        //this refers to the context
        console.log(this);
    }
}
object.a();

//instantiation

//Class Syntax

class Character {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.type}`);
    }
}

class Wizard extends Character{
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log(`WeEEEEEE I am a ${this.type}`);
    }
}

class Human extends Character{
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log(`I work as a/an ${this.type}`);
    }
}

const artist1 = new Character("Gandalf", "Elf");
const artist2 = new Wizard("Shawn", "Dark Magic");
const artist3 = new Wizard("Gandalf", "Elf");
const artist4 = new Human("Franklin", "Driver");

artist1.introduce();
artist2.introduce();
artist3.introduce();
artist2.play();
artist3.play();
artist4.introduce();
artist4.play();


