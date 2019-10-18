/*1) Have 2 functions validateName(which get argument some string and return true if it valid 
name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not empty)) and validateAge(get number argument and return true if value > 19 ).
Create some functions by currying,so I can filter  list of users by valid name and age.
(you can use compose or combine if need)*/
const usersList = [
	{
		name: 'ki kos',
		info: {
			age: 51
		}
	}, {
		name: 'Test Testovich    ',
		info: {
			age: 18
		}
	}, {
		name: 'Jon Doe',
		info: {
			age: 21
		}
	}
]

const combine = (...funcs) => {
	return (value) => {
		// console.log(value)
		return funcs.reduce((prev, current) => {
			return current(prev)
		}, value)
	}
}

const getProp = propName => {
	return obj => {
		return obj[propName]
	}
}

const validateName = name => {
	name = name.trim().split(' ')
	if (name.length === 2) return true;
	return false;
}

const validateAge = info => {
	if (info.age > 19) return true;
	return false;
}


const getName = getProp('name');
const getAge = getProp('info');

const vlaidatorName = combine(getName, validateName);
const vlaidatorAge = combine(getAge, validateAge);


const filteredListOfName = usersList.filter(vlaidatorName)
const filteredListOfAge = usersList.filter(vlaidatorAge)

console.log(filteredListOfName)
console.log(filteredListOfAge)


/* 2) Make the following object iterable:
 */

let todoList = {
	todoItems: [],
	addItem(description) {
		this.todoItems.push({ description, done: false });
		return this;
	},
	crossOutItem(index) {
		if (index < this.todoItems.length) {
			this.todoItems[index].done = true;
		}
		return this;
	}
};

todoList[Symbol.iterator] = function () {
	let start = 0;
	let length = this.todoItems.length
	return {
		next() {
			let elem = todoList.todoItems[start];
			if (start === length) {
				return {
					done: true
				}
			} else {
				start++;
				return {
					done: false,
					value: elem.description
				}
			}
		}
	}
}

todoList.addItem('task 1').addItem('task 2').addItem('task 3');

for (let item of todoList) {
	console.log(item);
}

/* 4 )  Create an infinite sequence that generates the next value of the Fibonacci sequence.
	The Fibonacci sequence is defined as follows:
*/
function* fib() {
	let first = 1;
	let second = 1;
	while (true) {
		let current = second;
		second = first;
		first = first + current;
		yield current;
	}
}
const fibGen = fib();

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);

/*5) Create async generator function which will get 3 promise arguments and will yeald f10:07 PM 10/16/2019rom 
	latest to first finished promise values*/

async function* getLastResult(...promises) {
	let length = promises.length;
	let arrIndex = [];
	let arrPromisesResult = []
	promises.forEach((item, index) => {
		item.then(_ => {
			arrIndex.push(index)
		})
	})

	for (let i = 0; i < length; i++) {
		arrPromisesResult.push(await promises[i])
		if (arrPromisesResult.length === length) {
			for (let j = length - 1; j >= 0; j--) {
				yield arrPromisesResult[arrIndex[j]]
			}
		}
	}
}

(async () => {
	const promise1 = new Promise(resolve => setTimeout(_ => resolve(10), 1000))
	const promise2 = new Promise(resolve => setTimeout(_ => resolve(30), 3000))
	const promise3 = new Promise(resolve => setTimeout(_ => resolve(20), 2000))
	let t = getLastResult(promise1, promise2, promise3)
	for await (let value of t) {
		console.log(value);
	}
})()



