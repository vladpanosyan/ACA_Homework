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

	!(a%b && b%a) && 1 || 0

// 5. Given three numbers. Find the maximum one

	a>b&&a>c&&String(a)||b>a&&a>c&&String(b)||String(c)// a>b && a>c && `${a}` || b > c && b || `${c}`

//*****************************************************

// 6.  Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’

let str = "test";
let str1 = str.slice(0, 2);//te
let str4 = str.slice(1, 3); // es
let str2 = str[0]+str[2] + str[1] + str[3] // tset `${str[0]}${str[1]}${str[3]}`
let str3 = str1.padStart(10, str4); // eseseseste
let str5 = str.substr(1); // est
let result = str1.concat(str2, str3, str5)
    