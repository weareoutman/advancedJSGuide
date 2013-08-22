/* jshint proto: true */
// lilei --> student --> person --> Object.prototype --> null

var person = {
	gender: "unkown",
	sayHello: function() {
		console.log("Hello world!");
	},
	walk: function() {
		console.log("I am walking");
	}
};

var student = Object.create(person);

student.sayHello = function() {
	console.log("Hello school!");
};
student.study = function() {
	console.log("I am studying!");
};

var lilei = Object.create(student);
lilei.gender = "male";

console.log(lilei.gender);
lilei.walk();
lilei.sayHello();
lilei.study();

console.log(person.gender);
delete lilei.gender;
console.log(lilei.gender);
console.log(person.gender);

// lilei --> student --> person --> Object.prototype --> null

console.log(student.isPrototypeOf(lilei)); // true
console.log(person.isPrototypeOf(student)); // true
console.log(Object.prototype.isPrototypeOf(person)); // true
console.log(null === Object.prototype.__proto__); // true