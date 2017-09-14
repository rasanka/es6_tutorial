// BEFORE
function calcBMI(weight, height, max, callback) {
	var bmi=weight / Math.pow(height ,2);
	if(bmi > max) {
		console.log("Overweight");
	}
	if(callback) {
		callback(bmi);
	}
}

calcBMI(weight, height, 25);
calcBMI(weight, height, null, function() {});

// Destructuring arguments with ES6
function calcBMI({ weight: w, height: h, max = 25, callback }) {
	var bmi= w / Math.pow(h ,2);
	if(bmi > max) {
		console.log("Overweight");
	}
	if(callback) {
		callback(bmi);
	}
}

calcBMI({ weight, height, max: 25 });
calcBMI({ weight, height, callback: function() {} });