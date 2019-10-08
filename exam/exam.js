	/* 1) Swap 2 variables.
			With third variable
			With arithmetic operators (1 point)*/
	//a/
	{
		let a,
		b = 3, 
		c = 5;
		a = b;
		b = c;
		c = a;	
		//b/	
		let x = 3,
		y = 5;
		x = x + y; 
		y = x - y; 
		x = x - y; 
	}
	/*2) Given three numbers. Find the maximum one (Only use &&, || and comparison operators)*/
	{
		x > y && x > z && `${x}` || y > z && y || `${z}`
	}

/* 3) Given an array of integers. Write a function that returns a new array
containing only odd numbers multiplied with new array length*/
{
	function isOdd(arr) {
		arr = arr.filter(item => item % 2);
		let length = arr.length;
		return arr.map(item => item * length)
	}
	console.log(isOdd([5, 4, 78, 0, -3, 7]))
}
/* 4) Given an array of integers. Write a function which will get that array and create new array,
 	with size equal to first positive element of given array (If no positive element 
 	return []) and content of returned array will be next elements of given array
  	(repeated, if needed).*/

  	{
  		function intArr(arr) {
  			let length = arr.find(item => item > 0);
  			let result = [];
  			let rest = arr.slice(arr.indexOf(length) + 1)
  			if(length && rest.length) {
  				while (result.length != length) {
  					console.log(7)
  					for(let i = 0; i < rest.length; i++) {
  						result.push(rest[i])
  						if(result.length === length) return result;
  					}
  				}
  			} else if(!length) {
  				return [];
  			} 

  			result.length = length;
  			return result
  		}		
  		console.log(intArr([-3,4]))
  	}

	/* 5)  Given an array of integers. Write a function which will get that array and return an object with 2 properties even6 and odd7. Values of that properties will be
			even6-> array of all positive numbers that are divisible by 6
			odd7-> array of all positive odd numbers that are divisible by 7
	*/
	{
		function arrOddEven(arr) {
			arr = arr.filter(item => item > 0 && (item % 6 ===0 || item % 7 ===0))
			return arr.reduce((obj, elem) => {

				if (elem % 6 === 0 ) {
					return {
						odd6: [...obj.odd6, elem],
						even7: [...obj.even7],
					}
				}
				return {
					odd6: [...obj.odd6],
					even7: [...obj.even7,elem],
				};
			}, {
				odd6: [],
				even7: [],
			})
		}		
		console.log(arrOddEven([12,7,5,18,21]))
	}

	/*6) Create User class. User needs to have name (a string containing only letters), age (a number in the range [0, 200]) and birthdate (only date type), validate
	 that properties by getters and setters.original property names need to be private
	  (do it using Symbol)*/

{
	/*
	7)	
	*/
{
// 	7) What is the difference ?
// ------------------------------------------------------
// 1-> function User(name) {
// 	this.name = name;
// 	this.printName = function() { console.log(this.name);};
//        }
// -------------------------------------------------------
// 2-> function User(name) {
// 	this.name = name;
//        }

//        User.prototype.printName = function() { console.log(this.name);};

// 1. method saved inside object such as objec method(property)
// 2. method saved in object prototype and that avilable in instance of User). I can call new User().printName
//    and get result from User.prototype

}

class User {
	constructor(name, age, birthday) {
		this[Symbol(`$name`)] = name;
		this.age = age;
		this.birthday = birthday;
	}
	get [name]() {
		return this[name]
	}
	set [name](value) {
		if(typeof +value === 'string') this[name] = value
		
	}
	get age() { 
		return this._age
	}
	set age(value) {
		if(value >= 0 && value < 200) {
		this._age = value
		}
	}
	get birthday() {
		return this._birthday
	}
	set birthday(value) {

		this._birthday = value

	}
}

let user = new User('John', 25, '20.05.1999');
console.log(user.age)
console.log(user)
}
/*
8) 
*/
{
	function User(name, age) {
		this.name = name;
		this.age = age;
	}

	function Player(name, age) {
		User.apply(this, arguments);

	}

	Player.prototype.play = function() {
		console.log(`Player ${this.name} palying`)
	}

	let player = new Player('John', 25);

	player.play()
}
/*9*/
class User {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

class Player extends User {
	constructor(name, age) {
		super(name, age);
	}
	play() {
		console.log(`Player ${this.name} palying`)
	}
}
let user = new User("kkk", 10)
let player = new Player('Sam', 20);
player.play()

/*10*/