//---------------------------
// Lexical context binding

var module = {
	age:30,
	foo: function() {
		console.log(this.age);
	},
	boo: function() {
		setTimeout(function() {
			console.log(this.age); // Not going to work need to bind
		}.bind(this), 100)
	}
};

module.foo();

module.boo();