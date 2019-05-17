// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
arrayRev = arr => {
return arr.reverse()
}
console.log(arrayRev(originalArray));

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)
// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
newArr = ourString.split("")
countL = arr => {
	els = []
	for(let i = 0; i < arr.length; i++) {
		if (arr[i].toLowerCase() === "l"){
			els.push(arr[i])
		}
	} return els.length
}
console.log(countL(ourString));

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
numbers = [0,1]
fibNums = num => {
	for(let i = 1; i < 10; i++) {
			numbers.push(num[i] + (num[i - 1]))
		}return numbers
}
console.log(fibNums(numbers));
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = arr => {
	onlyOdds = []
for(let i = 0; i < arr.length; i++) {
	if(Number.isInteger(arr[i]) && arr[i] % 2 != 0) {
		onlyOdds.push(arr[i])
	}
}return onlyOdds

}
console.log(oddChecker(fullArr));
