// 1. What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7' ?
	 '715', '67'

// ***************************************************

// 2.  Swap 2 variables.
// a. With third variable
// b. With arithmetic operators

// a
	let a,
		b = 5, 
		c = 6;
	a = b;
	b = c;
	c = a;
	// b
	let x = 5,
		y = 6;
	x = x + y; //11
	y = x - y; //5
	x = x - y; //6
	/* using ES6 destructurisng*/ [x, y] = [y, x]

// ****************************************************

// 3.  Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise

	a<0&&"yes"||"no"

// ****************************************************

//4.  Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
	
// ***************************************************

	a/b||b/a&&1||0

// 5. Given three numbers. Find the maximum one

	a>b&&a>c&&String(a)||b>a&&b>c&&String(b)||c>a&&c>b&&String(c)||"there are some equal numbers"

//*****************************************************

// 6.  Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’

	let str = "test",str2 = "";
	let str1 = str.slice(0, 2);
	for(let i in str) {
	  str2+=str[str.length-i-1]
	}
	let str3 = str1.padStart(10, 'es').concat(str.substr(1));
	let result = str1.concat(str2, str3);

