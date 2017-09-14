// BEFORE
function parent() {
	// constructor
}

Parent.prototype.foo = function() {}
Parent.prototype.bar = function() {}


// With ES
class Parent {

	//ES7
	age = 34;

	constructor() {

	}

	foo() {

	}

	static bar() {

	}
}

var parent = new Parent();
parent.foo();

Parent.age; // 34

Parent.bar(); // Static method

// ---------------------------------------------

class Child extends Parent {
	constructor() {
		super()
	}

	baz() {

	}
}

var child = new Child();
child.baz();
