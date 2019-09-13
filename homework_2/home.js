// 1
// a. Print all number between 1 and 10.
for(let i = 2; i < 10; i++) {
	console.log(i);
}
// b. Print all number between 1 and 10 except 6.

for(let i = 2; i < 10; i++) {
	if(i === 6) {
		continue;
	}
	console.log(i);
}

// c. Print all even number between 1 and 10.

for(let i = 2; i < 10; i++) {
	if(i % 2 !== 0) {
		continue;
	}
	console.log(i);
}
// d. Calculate sum of all numbers between 1 and 10 (using loop).
{
	let sum = 0;
	for(let i = 2; i < 10; i++) {
		sum+=i;
	}
	console.log(sum);
}
// e. Calculate sum of all numbers between 1 and 10 except 8.
{

	let sum = 0;
	for(let i = 2; i < 10; i++) {
	if(i === 8) {
		continue;
	}
	sum+=i
	}
	console.log(sum);
}

//  e. Calculate sum of all odd numbers between 1 and 10.
{
	let sum = 0;
	for(let i = 2; i < 10; i++) {
	if(i % 2 === 0) {
		continue;
	}
	sum+=i
	}
	console.log(sum);
}

// g. Calculate sum of squares of all numbers between 1 and 10

{
	let sum = 0;
	for(let i = 2; i < 10; i++) {
	sum+=i*i
	}
	console.log(sum);
}

// *********************************************************************************************************
// 2. Insert a digit and a number. Check whether the digits contains in the number or not.(don`t use string)
{
	function isExistDigit(digit, number) {
    while(number !== 0) {
      let currentDigit = number % 10;
      let tempDigit = (currentDigit < 0) ? -currentDigit : currentDigit;
      if(digit === tempDigit) {
        return "YES";
      } else {
        number = (number - currentDigit) / 10;
      }
    }
    return "NO";
  }
    console.log(isExistDigit(-6, -647));// 0, 64; 0, 0+
}

// *********************************************************************************************************
//3. Enter a number. Reverse its first and last digits. Print the new number.
function changeDigits(a) {
  let firstDigit = a,
      point = 1,
      lastDigit,
      part,
      result;
  while(firstDigit > 10) {
    point*=10;
    firstDigit = (firstDigit - firstDigit % 10) / 10;
  }
  lastDigit = a % 10;
  part = a%point + point * lastDigit;
  result = (part - part%10) + firstDigit;
  return result;
}
console.log(changeDigits(1235));

// *********************************************************************************************************
// 4. Enter a number. Find the difference between its biggest and smallest digits.
function getMinMaxDiff(a) {
	let max = 0, min = 9, elem;
	while(a > 0) {
	  elem = a % 10;
	  if( elem > max) {
	    max = elem;
	  } 
	  if(elem < min) {
	      min = elem
	  }
	  a = (a - elem) / 10;
	}
	return max - min;
}
console.log(foo(234506543201403));
// *********************************************************************************************************

// 5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

	function isPrime(a) {
		for (var i = 2; i < a; i++) {
		    if(a % i === 0) return "NO"; 
	  	}
		return a > 1 ? "YES" : null;
	}
	console.log(isPrime(3));

//*********************************************************************************************************
//6. Given a number n ( n > 0 ). Print Fibonacci series up to n.
function fib(a) {
  let first = 0;
  let second = 1;
  let next = 0;
  while(next + second < a ) {
    first = second;
    second = next;
    next = first + second;
    console.log(next);
  }
}
console.log(fib(14));

//*********************************************************************************************************
// 7. Write a recursive function to determine whether all digits of the number are odd or not.
{
	function isOdd(number) {
	  let curr = number % 10;
	  let nextCheck = (number - curr) / 10;
	  if(number % 2 === 0 ) {
	    return false;
	  } else if(nextCheck !== 0) {
	    return isOdd(nextCheck);
	  }
	  return true;
	}
console.log(isOdd(10));
}
//*********************************************************************************************************
// 8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ 
//     If there are several words which are the longest ones, print the last word(words can be separated by space,
//     comma or hyphen).
{
let str = "A revolution without, dancing is a rev567tion not worth having.";
	function getLongestWord(str) {
	  let maxWord = '';
	  let word = '';
	  for(let i = 0; i < str.length; i++) {
	    if( str[i] === ' ' || str[i] === ',' || str[i] === '-' ) {
	        if(word.length >= maxWord.length) {
	          maxWord = word;
	        }
	        word = '';
	    } else word = `${word}${str[i]}`;
	  }
	  return maxWord;
	}
console.log(getLongestWord(str));
}
//************************************************************************************************************
//9. Write a function to find longest substring in a given a string without repeating characters 
//	except space character. If there are several, return the last one. Consider that all letters are 
//	lowercase.

{
	let str = 'there are no two words in the english language more harmful than "good job".';
	function getUniqSubstring(str) {
		let newStr = '';
		let tempStr = '';
		for(let j = 0; j < str.length; j++) {
			occurance = str[j].toLowerCase();
			if(occurance === ' ') {
				tempStr=`${tempStr} `;
			} else if(!tempStr.includes(occurance)) {
				tempStr=`${tempStr}${occurance}`
			} else {
				newStr = (tempStr.length >= newStr.length) ? tempStr : newStr;
				let index = tempStr.indexOf(occurance);
				tempStr = tempStr.slice(index + 1);
				j--;
			}
		}
		return newStr;
	}
	console.log(getUniqSubstring(str))
} 
//***************************************************************************************************************
//10. Write a function, which receives two numbers as arguments and finds all numbers between them 
//    such that each digit of the number is even. The numbers obtained should be printed in a
//    comma-separated sequence on a single line.

function getEvenDigits(a, b ) {
  let str = '', tempStr = '';
  for(let i = a; i < b; i++) {
    let curent = i;
    while(curent !== 0) {
      let c = curent % 10;
      if(c % 2 === 0) {
        tempStr = c + tempStr;
        curent = (curent - c) / 10;
      } else {
        tempStr = '';
        break;
      }
    }
    if( tempStr || !i ) {
      if(i === 0) {
        str = `${str}${i},`
      } else {
        str = `${str}${tempStr},`
      }
    } else str = `${str}`;
  }
  return str || 'Such numbers does not exist.';
}
console.log(getEvenDigits(19, 42))