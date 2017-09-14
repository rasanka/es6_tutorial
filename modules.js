module.exports.foo = function() {

};

module.exports.bar = function() {

};

//or
module.exports = function() {

}
// ES 6
export function foo() {

}
export function bar() {
	
}
export var a = 3;

export default {
	// Exporting entire thing
}

//-------------------------------------------------------------------

//------------
// Another file

var myModule = require("modules");
var foo = myModule.foo;

// ES 6 
import myModule from "modules"; // Should be at the top of the file
// Destructuring
import { foo as foolish, bar } from "modules";
//....
console.log(foolish);

import { each, omit } from "lodash";
//.....
omit(obj, "key");