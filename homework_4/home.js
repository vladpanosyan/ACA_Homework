/*1) Create a Rectangle class. Rectangle should have: length and width.
    It should have getters and setters for all fields.
    It should have getArea() method.
    It should have getPerimeter() method.
    It should have a toString method*/

class Rectangele {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

   set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }
 
  set height(value) {
    this._height = value;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
      return 2 *(this.width + this.height)
  }

  toString() {
    return 'Blob';
  }
}
let rec = new Rectangele(10, 50);
rec.height = 300;
console.log(rec.getPerimeter());
console.log(rec.getArea());
console.log(rec.width);
alert(rec);


/* 2) Create an object called shape that has the type property and a getType() 
method.Define a Triangle() constructor function whose prototype is shape. Objects
created with Triangle() should have three properties — a, b, and c, representing 
the lengths of the sides of a triangle.Add a new method to the prototype called 
getPerimeter()*/

let shape = {
  type: 'Triangle',
  getType() {
    return this.type;
  }
}
// console.log(shape.getType());
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.getPerimeter = function() {
    return this.a + this.b + this.c;
  }
}
Triangle.prototype = Object.create(shape);
Triangle.prototype.constructor = Triangle;
let triangle = new Triangle(5, 10, 15);
  
/* 3) Create an Author class and a Book class.
		Author should have: name, email, gender. 
		It should have getters.
		It should have a toString method.*/

class Author {
  constructor(name, email, gender) {
    this.name   = name;
    this.email  = email;
    this.gender = gender
  }

  toString() {
    return `The author is ${this.name}, ${this.gender === 'male' ? 'his' : 'her'} email is ${this.email}`
  }
}

class Books {
  constructor(title, author, price, quantity) {
    this.title    = title;
    this.author   = author;
    this.price    = price;
    this.quantity = quantity;    
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    let status = this.getProfit();
    return (status < 25000) ? `a` : status > 50000 ? 'c' : 'b' ;
  }
}
let author = new Author('John', 'jjjj@gmail.com', 'male');
// let book = new Books('js start', author, 500, 35);
let proxy = new Proxy(Books, {
  construct(target, args) {
    return new Proxy(new target(...args), {
      get(target, prop) {
        return target[prop];
      },
      ser(target, prop, vlaue) {
        target[prop] = value;
        return true;
      }
    });
  }
});

const proxy1 = new proxy('js start', author, 50000, 30); 

console.log(proxy1.author);
console.log(proxy1.price);
proxy1.price = 1002;
console.log(proxy1.price);
console.log(proxy1.author.name = 'Samuel');
console.log(proxy1.author);

console.log(proxy1.getProfit());
alert(proxy1.author);
alert(proxy1);

// ***************************************************************************************

/* 4) What is output and why?
        function test (name) {
           this.fullName = `My name is ${name}`
           this.age = 5;
           return this.age;
        }

  a)  new test(’Some Name’);
  b)  test('Some Name’)

  a) Output will be an object with properties "fullname" and "age", because witin function 
  returned prmitive value.

 b) Output  in 'use strict' mode will be Error, because in 'use strict' mode this in function
    equal undefined and js cannot set any property to undefined. But not 'use strict' mode
    this witin function referenses in global object window, so in this case js assigns to 
    window object age and fullname properties(variables) and function returns that variable directly.  
*/

// ***********************************************************************************************************

/* 5)  What is output and why?
	 
function test (name) {
   this.fullName = `My name is ${name}`
   this.age = 5;
   return {
       age: this.age
   };
}

	a )new test(’Some Name’);
	b)  test('Some Name’);

	a) Result will be object with property 'age'(without fullname), because if in function-
		constructo has return statement and its value is object type then  we will get that object,
	b)  described above -> 4) b
*/


// *******************************************************************************************************
/*
	6) What will be the output of the following code and why?


var Animal = function (name, type) {
   this.kind = name,
   this.breed = type
}

var playground = {
   animals: [],

   addAnimal(animal) {
       this.animals.push(animal);
   },

   listAnimalKind(kind) {
       this.animals.forEach(function (animal) {
           if (animal.kind == kind) {
               console.log(animal.breed);
           }
       });
   }
}

playground.addAnimal(new Animal('dog', 'Labrador')); __a__
playground.addAnimal(new Animal('dog', 'Goldren Retriever')); __b__
playground.addAnimal(new Animal('rabbit', 'Angola')); __c__
playground.listAnimalKind('dog'); __d__

RESULT ->   Labrador
			Goldren Retriever

In __a__ , __b__, __c__ lines we actually add Animal instace object into animals array
(addAnimals method in its argument waiting for an object)․
In __d__ line we looping the animals array and print all animal breed wher its kind equal
listAnimalKind method argument value;

*/


// ***************************************************************************************************
/*
7) Write Car class, which have .. .. .. 
*/
class Car {
  constructor(name, color, currentPosition = 0, intervalPinter = null, speed) {
    this.name            = name;
    this.color           = color;
    this.currentPosition = currentPosition;
    this.intervalPinter  = intervalPinter;
    this.speed           = speed; 
  }
  static finishPosition = 200;
  static isWinner = false;

  reset() {
    this.currentPosition = 0;
  }

  start() {
    let timerId = setInterval(() => {
      this.currentPosition+=Math.round((300 * this.speed) / 1000);
      if(this.currentPosition <= Car.finishPosition) {
        console.log(`${this.currentPosition} - %c${this.name}`, `color: ${this.color}`);
      } else this.stop();
    }, 300);
    this.intervalPinter = timerId;
  }

  stop() {
    clearInterval(this.intervalPinter);
    if(!Car.isWinner) {
      console.log(`${this.name} has finished Race %c"W I N N E R !!!"`, `color: red`);
      Car.isWinner = true
    } else console.log(`${this.name} has finished Race`);
  }
}

// car competition logic
// carsLimit is count of cars which are competitive
function carCompetition(carsLimit) {

  function findCar(car) {
    return car.name === this.name;
  }

  const carList   = ['Audi', 'BMW', 'Jeep', 'Mercedes', 'Toyota'];
  // const speedList = [30, 40, 50, 60, 65];
  const colorList = ['#1d45e5', '#d81717', '#47e51b', '#ede623', '#b414bc'];

  return {
    cars: [],
    addCars(minSpeed, MaxSpeed) {
      while(this.cars.length < carsLimit) {
        let index = ~~(Math.random() * carList.length);
        let car   = carList[index];
        if(!this.cars.find(findCar, {name: car})) {
          let speed = ~~((Math.random() * (MaxSpeed - minSpeed)) + minSpeed);
          let color = colorList[index];
          this.cars.push(new Car(car, color, 0, null, speed));
        }
      }
    },
    getCars() {
      return this.cars;
    },
    carStarCompetition(finishPosition = Car.finishPosition) {
      Car.finishPosition = finishPosition;  
      this.cars.forEach( car => car.reset());
      this.cars.forEach( car => car.start());
    }
  }
}

let carGroupOne = carCompetition(3);
// let carGroupTwo = carCompetition(4);

carGroupOne.addCars(21, 26); 
// carGroupTwo.addCars(); 

carGroupOne.carStarCompetition();
// carGroupTwo.carStarCompetition(100);

console.log(carGroupOne.getCars());

/*8) Write 7) with function prototype style*/
{

	function Car(name, color, currentPosition, intervalPinter, speed) {
		this.name            = name;
		this.color           = color;
		this.currentPosition = currentPosition;
		this.intervalPinter  = intervalPinter;
		this.speed           = speed; 
	}

	Car.finishPosition = 150;
	Car.isWinner       = false;

	Car.prototype.reset = function() {
		this.currentPosition = 0
	}

	Car.prototype.start = function() {
		let timerId = setInterval(() => {
			this.currentPosition+=Math.round((300 * this.speed) / 1000);
			if(this.currentPosition <= Car.finishPosition) {
				console.log(`${this.currentPosition} - %c${this.name}`, `color: ${this.color}`);
			} else this.stop();
		}, 300);
		this.intervalPinter = timerId;
	}

	Car.prototype.stop = function() {
		clearInterval(this.intervalPinter);
		if(!Car.isWinner) {
			console.log(`${this.name} has finished Race %c"W I N N E R !!!"`, `color: red`);
			Car.isWinner = true
		} else console.log(`${this.name} has finished Race`);
	}

	// car competition logic
	// carsLimit is count of cars which are competitive
	function carCompetition(carsLimit) {

		function findCar(car) {
			return car.name === this.name;
		}

		const carList = ['Audi', 'BMW', 'Jeep', 'Mercedes', 'Toyota'];
		// const speedList = [30, 40, 50, 60, 65];
		const colorList = ['#1d45e5', '#d81717', '#47e51b', '#ede623', '#b414bc'];

		let cars = [];
		return {
			addCars(minSpeed, MaxSpeed) {
				while(cars.length < carsLimit) {
					let index = ~~(Math.random() * carList.length);
					let car   = carList[index];
					if(!cars.find(findCar, {name: car})) {
						let speed = ~~((Math.random() * (MaxSpeed - minSpeed)) + minSpeed);
						let color = colorList[index];
						cars.push(new Car(car, color, 0, null, speed));
					}
				}
			},
			getCars() {
				return cars;
			},
			carStarCompetition(finishPosition = Car.finishPosition) {
				Car.finishPosition = finishPosition;  
				cars.forEach( car => car.reset());
				cars.forEach( car => car.start());
			}
		}
	}

	let carGroupOne = carCompetition(3);
	// let carGroupTwo = carCompetition(4);

	carGroupOne.addCars(20, 50); 
	// carGroupTwo.addCars(); 

	carGroupOne.carStarCompetition();
	// carGroupTwo.carStarCompetition(100);

	console.log(carGroupOne.getCars());

}









