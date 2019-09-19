/*1. Write a function, which receives an array as an argument which elements arrays of numbers. 
	 Find biggest negative number of each array. Return product of that numbers.If there is not any 
	 negative number in an array, ignore that one. Check that items of the given array are arrays.*/

	 {
	 	function getNegativeMult(arr) {
	 		if(arr.every( (item) => Array.isArray(item)) ) {
	 			let elems = arr.reduce((arr, item) => {
	 				let d = item.filter((item) => item < 0).sort((a, b) => b - a)[0];
	 				return (d < 0) ? [...arr, d] : [...arr];
	 			}, [])
	 			if(elems.length) {
	 				return elems.reduce((result, item) => result * item);
	 			}
	 			return `No negatives`
	 		} 
	 		return `Invalid Argument`; 
	 	}
	 	console.log(getNegativeMult([[2, -9, -3, 0], [1, -2], [-4 , -11, 0]]));
    // console.log(getNegativeMult([[2,  0], [1, 2], [0]]));
}

/* 2.Given an array of strings and numbers. Print the number of integers and the number of strings in the array.*/

{
	function getQuantityOfnumber_Str(arr) {
		let arrayInfo = arr.reduce((obj, elem) => {
			if(typeof elem === 'number') {
				return {
					...obj, numberQuantity: ++obj.numberQuantity
				}
			} 
			return {
				...obj, stringQuantity: ++obj.stringQuantity
			}
		}, {
			numberQuantity: 0,
			stringQuantity: 0
		});
		return `Numbers:${arrayInfo.numberQuantity}, Strings:${arrayInfo.stringQuantity}`;
	}	
	console.log(getQuantityOfnumber_Str([4,'1', '4', 'i am a string', '456','5']));

}

/* 3. Given an array consisting from the arrays of numbers (like a two-dimensional array). 
Find sum of each row and print them as an array.*/

{
	function getSumOfArrElems(arr) {
		return arr.map((item, index) => {
			return item.reduce((a, b) => a + b);
		});
	}	
	console.log(getSumOfArrElems([[1,6], [2], [3], [4,-2]]));
}
/* 4. Given an array of integers. Write a function that return new array from first array,	
where  removed even numbers, and odd numbers was multiplied with new array length*/

{
	function foooo(arr) {
		let oddArray = arr.filter( item => item % 2 );
		let  length = oddArray.length;
		return oddArray.map( item => item * length);
	}
	console.log(foo([0,5,1]));	
}

/* 5. Given an array of numbers. Create an array containing only elements once*/
{
	function getuniqItemsOfArray(arr) {
		return  arr.filter( (item, index, arr) => arr.indexOf(item) === index );
	}
	console.log(foo([1, 2, 3, 3, 2, 5, 2, 2, 2]));
}

/* 6.  Given an array. Create the array which elements are products between two neighbours.*/
{
	function getSiblingMultOfArray(arr) {
		arr = arr.reduce((sorted, item, index, arr) => {
			let mult = item * arr[index + 1]
			return [...sorted, mult]
		}, []);
		arr.pop();
		return arr;
	}
	console.log(foo([1, 1, 4, 32, 6]));
}

/* 7. Given an object. Invert it (keys become values and values become keys).
If there is more than key for that given value create an array.*/

// {
// 	function arrayInvert(obj) {
// 		let keys = Object.keys(obj);
// 		let arr = [];
// 		for(let prop in obj) {
// 			let b = {
// 				[obj[prop]]: prop
// 			};
// 			arr.push(b);
// 		}
// 		let res = arr.reduce(function(object, item, index, arr) {
//     //item = {key, value} destructuring doesn't work . WHY ???
//     //for example -> console.log(key) //undefined;
//     if(obj[keys[index]] in object) {
//     	return {
//     		...object,
//     		[obj[keys[index]]]: [...object[obj[keys[index]]], keys[index]]
//     	}
//     }
//     return {
//     	...object,
//     	[obj[keys[index]]]: keys[index]
//     }
// }, {});
// 		return res;
// 	}
// 	console.log(arrayInvert({ a: '1', b: '2', c: '2', d: '2'}));
// }


{
  function arrayInvert(obj) {
    let inctance = {};
    for(let prop in obj) {
      let key = obj[prop];
      if(key in inctance) {
        inctance[key] = [...inctance[key], prop]
      } else inctance[key] = prop
    }
    return inctance;
  }
  console.log(arrayInvert({ a: '1', b: '2', c: '2', d: '2'}));
}

/* 8.  Given an object. Write a function that creates a deep copy of it.*/
{
	let obj = {
		a:5,
		b:6,
		c:{
			e:7,
			d:8,
			f: [1,2,3]
		},
	}

	function deepCopy(obj) {

		if(typeof obj !== 'object' || obj === null) {
			return obj;
		} 

		if(obj instanceof Object) {
			return Object.keys(obj).reduce((objCopy, prop) => {
				objCopy[prop] = deepCopy(obj[prop]);
				return objCopy;
			}, {})
		}

		if(obj instanceof Array) {
			return obj.reduce((arr, item, i) => {
				arr[i] = deepCopy(item);
				return arr;
			}, []);
		}

	}
	let copy = deepCopy(obj);
	copy.c.d = 888
	console.log(obj, copy);

}