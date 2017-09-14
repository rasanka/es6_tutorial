// Destructuring

var foo = {
	bar: 1,
	baz: 2
};

var { bar, baz } = foo;

console.log(bar);

// Arrays

var tenses = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = tenses;

Promise.all([promise1, promise2]).then(function([result1, result2]){

});

// Objects

var foo = 2;

var obj = {
	bar:1,
	foo
};

var name = "rasanka";
var age = 34;
some.method({ name, age});
{
	name: name,
	age: age
}




