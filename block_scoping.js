var a =1;

// Function scoping
function() {
	var b = 2;
}

console.log(b); // Not in scope

//--------------------------------------

// Block scoping
var c =2; // let is the new var
if(true) {
	let d = 3;
}
console.log(d); // In the scope

// This is similar to 
var c =2;
var d;
if(true) {
	d = 3;
}
console.log(d); // In the scope


//---------------------------------------
const foo = 1;

if(true) {
	const bar = 2;
	bar = 3; // Nooooop
}

console.log(bar); // Not in scope

// Where let can be changed .. So use let if necessary
