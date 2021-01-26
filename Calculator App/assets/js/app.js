function add(array) {
	let result = 0;
	for (i = 0; i < array.length; i++) {
		result += Number(array[i]);
	}
	return result;
}

function multiply(array) {
	let result = 1;
	for (i = 0; i < array.length; i++) {
		result *= Number(array[i]);
	}
	return result;
}

function divide(num1, num2) {
	if (num2 != 0) {
		return num1 / num2;
	} else {
		alert("Can't divide a number by 0!");
		console.log("Error: divisionByZero");
	}
}

function subtract(num1, num2) {
	return num1 - num2;
}

function square(num1) {
	return Math.pow(num1, 2);
}

function average(array) {
	let sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += Number(array[i]);
	}
	return sum/array.length;
}

(function () {
	// Uses operation to run function 

	if (lowercaseOperation == "square") {
		let num1 = Number(prompt("Enter the number you want to square"));
		console.log(square(num1));
	} 
	else if (lowercaseOperation == "add" || lowercaseOperation == "multiply" || lowercaseOperation == "divide" || lowercaseOperation == "subtract" || lowercaseOperation == "average") {
		if (lowercaseOperation == "add" || lowercaseOperation == "multiply" || lowercaseOperation == "average") {
			let addStack = [];
			var i = 1;
			do {
				let num1 = Number(prompt("Enter number " + i + ": "))
				addStack.push(num1)
				var cont = prompt("Enter 'q' to get result, any other key to continue");
				i++;
			} while (cont != 'q');

			console.log(this[lowercaseOperation](addStack));

		} 
		else {
			let num1 = prompt("Enter the first number");
			let num2 = prompt("Enter the second number");
			var result = this[lowercaseOperation](num1, num2);
			console.log(result);
		}
	} 
	else {
		console.log("The operation you entered isn't available.")
	}
}());