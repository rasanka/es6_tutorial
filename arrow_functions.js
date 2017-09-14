// Arrow functions
// BEFORE
var foo = function(a , b) {
	return a+b;
}

// With ES6
var foo = (a,b) => {
	return a+b;
}

//--------------------------
// Passing functions as arguments
do.something(function(a, b) {
	return a+b;
});

do.something((a, b) => { return a+b; });
do.something((a, b) => a + b);
do.something(a => a + 1);

[0,1,2].map(val => val++); // [1,2,3]

