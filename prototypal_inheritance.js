


// Function.prototype.inherits = function(MainClass) {
//     function Surrogate(){};
//     Surrogate.prototype = MainClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

Function.prototype.inherits = function (MainClass) {
    this.prototype = Object.create(MainClass.prototype);
    this.prototype.constructor = this;
}





function MovingObject (name) { 
    this.name = name
}
MovingObject.prototype.moving = function(){
    console.log(this.name + " is moving ")
}

function Ship(name) {
    this.name = name
}

Ship.inherits(MovingObject);

Ship.prototype.speeding = function(){
    console.log(this.name + " is speeding")
}

const train = new MovingObject("The Train")
const starfox = new Ship("starfox")
console.log(starfox.moving())
console.log(starfox.speeding())

console.log(train.moving())



function Asteroid(name) { 
    this.name = name
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.impact = function() {
    console.log(this.name + " will impact Earth in 0.563 seconds")
}

const asteroid = new Asteroid("Vesta Minor")

console.log(asteroid.moving())
console.log(asteroid.impact())
// console.log(train.impact())
// console.log(starfox.impact())

Ship.prototype = Object.create(MovingObject.prototype)