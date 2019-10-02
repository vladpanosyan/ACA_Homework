/* 1) promise.then(f1).catch(f2); vs promise.then(f1, f2); 
		Is equivalent or not and why?(show example)
*/
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve("Resolved wth succes");
		}, 3000)
		// tuktuk()  (*)
	});
	promise.then((resultResolve) => {
		console.log(resultResolve)
		throw new Error('Error in then')// script fallen :):):):)
	}, (resultReject) => {
		console.log(resultReject.message)
	});

	// in this case if inside first handler of then method happens an error, we can't catch that error in second argument of then method
	//we can only ctach error when it happens in (*) line (for example).

	let promise1 =  new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve("Resolved wth succes");
		}, 2000)
	});

	promise1
	.then((resultResolve) => {
		// console.log(resultResolve)
		throw new Error('Error in then handler')// script fallen :):):):)
	}, (resultReject) => {
		console.log(resultReject.message)
	})
	.catch(err => console.log(err.message));
}
//in this case we successfully can catch error happened in first handler of then method.

//--------------------------------------------------------------------------------------------------------------------

/*
	2) Why catch not work and how to fix?
 
		new Promise(function(resolve, reject) {
		  setTimeout(() => {
		    throw new Error("Whoops!");
		  }, 1000);
		}).catch(alert);
*/
// The reason is that when the executor function called automatically, its deployed in Call Stack data structure
// and executed in main stream. But setTimeout callback function deployed in call Stack from EVENT LOOP and executed
// when call stack is empty. So that's mean that when setTimeout callback function throws ERROR it is not possible
// be catched with Promise, because Promise is already finished․ 

// 1 variant. Use reject instead throw
{
	let promise = new Promise(function(resolve, reject) {
	  	setTimeout(() => {
	 		reject(new Error("Whoops!"));
	  	}, 1000);
	}).catch(alert);
}

// 2 variant use try-catch, but error catching happens in catch block inside of setTimeout() method
{
	let promise = new Promise(function(resolve, reject) {
	  	setTimeout(() => {
	  		try{
		 		throw new Error("Whoops!");
	  		}
	  		catch(err) {
	  			console.log(err.message)
	  		}
	  	}, 1000);
	}).catch(alert);
}

// 3 variant. we need to do asynchronous throw
{
	let promise = new Promise(function(resolve, reject) {
	 	new Error("Whoops!");
	}).catch(alert);
}


//--------------------------------------------------------------------------------------------------------------------

/* 
  3) You have some 3 async functions. Need to create function which get that 3 functions and some callback in arguments
   and call that callback when last async function was ending and send that function returning data to callback. 
   That 3 functions have 1 callback arguments
*/
{
	let count = 0
	const async1 = (cb) => {
	    setTimeout(() => {
	        cb(1);
	    }, 4000);
	};
	const async2 = (cb) => {
	    setTimeout(() => {
	        cb(13);
	    }, 6000);
	};
	const async3 = (cb) => {
	    setTimeout(() => {
	        cb(5);
	    }, 3000);
	};

	const someCallback = (val) => {
		count++;
		if(count === 3){
			console.log(val);	
		}
	}

	const yourXFunction = (callback, ...rest ) => {  
		rest.forEach(item => item(callback));
	}

	yourXFunction(someCallback, async1, async2, async3);
}

/*
	4) You have some 3 async Promises. create some function (like promise all,race ….) which will get promises
 	and return some promise which will invoked on last finished promise time and will send that last returned
  	value to resolve function, or reject some error on error case
*/
{
	const async4 = new Promise((resolve, reject) => {
		setTimeout(() => {
	        resolve(4);
	    }, 4000);
	});
    
	const async6 = new Promise((resolve, reject) => {
		setTimeout(() => {
	        resolve(6);
	    }, 6000);
	});

	const async2 = new Promise((resolve, reject) => {
		setTimeout(() => {
	        resolve(2);
	    }, 2000);
	});

	let promiseAll = (ps) => new Promise((resolve, reject) => {
	    const results = [];
	    let counter = 0;
	    ps.forEach((p, i) => {
			p.then((res) =>{
				counter++;
				if(counter === 3) {
					resolve(`LATEST ENDED PROMISE result is ${res}`)
				}    	
			}).catch(err => {
				counter++;
			});
	    })
	});
	let t = promiseAll([async6,async2,async4]);
	t.then(result => console.log(result));
}


/*
	5) You have some 3 async Observables. do same work(like 3 and 4)
	 	with observables without using promise(only with observable methods) 
*/

let y = ( function() {
	let count = 0;
// callbac function for async f(x)
	async function someCallback(val) {
		count++;
		if(count === 3) {
			console.log(val);
		}
	}

// async observers

	function async1(cb) {
		setTimeout(() => cb(1), 4000);
	}
	
	function async2(cb) {
		setTimeout(() => cb(13), 6000);
	}


	function async3(cb) {
		setTimeout(() => cb(5), 3000);
	}

	class Observerable {
		constructor() {
			this.observers = [];
		}

		subscribe(observer) {
			this.observers.push(observer);
		}

		// unsubscribe(observer) {
		// 	this.observers.filter( obs => oserver !== obs)
		// } 

		dispatch(callback) {
			this.observers.forEach(observer => {
				observer.notify(callback);
			});
		} 
	}

	class Observer {

		constructor(data) {
			this.data = data;
		}

		notify(callback) {
			this.data(callback)
		}
	}

	let observerable = new Observerable();

	let async1Ob = new Observer(async1);
	let async2Ob = new Observer(async2);
	let async3Ob = new Observer(async3);

	observerable.subscribe(async1Ob);
	observerable.subscribe(async2Ob);
	observerable.subscribe(async3Ob);

	observerable.dispatch(someCallback);
})();