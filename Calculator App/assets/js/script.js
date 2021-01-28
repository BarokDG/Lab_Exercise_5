function add(array) {
	let result = 0;

	array.forEach(element => {
		result += Number(element);
	});

	inputArray = [];
	return result;
}

function subtract(array) {
	let result = array[0];

	array = array.slice(1, );
	array.forEach(element => {
		result -= Number(element);
	});

	inputArray = [];
	return result;
}

function multiply(array) {
	let result = 1;

	array.forEach(element => {
		result *= Number(element);
	});

	inputArray = [];
	return result;
}

function divide(array) {
	let result = array[0];
	array = array.slice(1, );

	array.forEach(element => {
		result /= Number(element);
	});

	if (result == Infinity) {
		inputArray = [];
		return "Error: divisionByZero";
	}

	inputArray = [];
	return result;
}

function square(num1) {
	inputArray = [];

	// num1[0] ignores additional numbers if the user clicks on the square button multiple times
	return Math.pow(num1[0], 2);
}

function sqrt(num1) {
	inputArray = [];

	// num1[0] ignores additional numbers if the user clicks on the square button multiple times
	return Math.sqrt(num1[0]);
}

function cube(num1) {
	inputArray = [];

	// num1[0] ignores additional numbers if the user clicks on the square button multiple times
	return Math.pow(num1[0], 3);
}

// function average(array) {
// 	let sum = array[0];
// 	let result;
// 	array = array.slice(1,);
// 	array.forEach(element => {
// 		sum += Number(element);
// 	});

// 	result = sum/(array.length + 1);

// 	inputArray = [];
// 	return result;
// }

// UI Variables

const inputClick = document.querySelectorAll("button");
const main = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equalsign");
let emptyString = '';
let inputArray = [];
let displayValue = document.querySelector('input');

// Event Listener

main.addEventListener('click', clickEvent);
main.addEventListener('click', inputDisplay);
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', result);

// Event Handler functions

function clickEvent(e) {

	if (e.target.classList.contains("opbutton")) {
		let operation = e.target.value;

		if (operation == "add") {
			inputArray[0] = "add";
			inputArray.push(Number(emptyString));
			emptyString = '';

		} else if (operation == "subtract") {
			inputArray[0] = "subtract";
			inputArray.push(Number(emptyString));
			emptyString = '';

		} else if (operation == "multiply") {
			inputArray[0] = "multiply";
			inputArray.push(Number(emptyString));
			emptyString = '';

		} else if (operation == "divide") {
			inputArray[0] = "divide";
			inputArray.push(Number(emptyString));
			emptyString = '';

		} else if (operation == "square") {
			inputArray[0] = "square";
			inputArray.push(Number(emptyString));
			emptyString = '';
		} else if (operation == "sqrt") {
			inputArray[0] = "sqrt";
			inputArray.push(Number(emptyString));
			emptyString = '';

		} else if (operation == "cube") {
			inputArray[0] = "cube";
			inputArray.push(Number(emptyString));
			emptyString = '';
		}
		// else if (operation == "average") {
		// 	inputArray[0] = "average";
		// 	inputArray.push(Number(emptyString));
		// 	emptyString = '';
		// }
	}
}

function inputDisplay(e) {
	if (!e.target.classList.contains("opbutton")) {
		emptyString += e.target.value;
		displayValue.value = emptyString;
	}
}

function clear() {
	displayValue.value = '0';
	emptyString = '';
}

function result(e) {
	if (!e.target.classList.contains("extra")) {
		inputArray.push(Number(emptyString));
	}

	let result = window[inputArray[0]](inputArray.slice(1, ))
	displayValue.value = result;

	// if (result == 'Error: divisionByZero') {
	// 	document.querySelector('.input').style.fontSize = "2.5rem";
	// }

	emptyString = '';
}