/* global Person */
function Student() {
	Person.call(this);
}

Student.prototype = new Person();
// Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
	console.log("Hello school!");
};

Student.prototype.sayGoodbye = function() {
	console.log("Goodbye school!");
};

var lilei = new Student();

lilei.sayHello();
lilei.sayGoodbye();

console.log(lilei instanceof Person);  // true
console.log(lilei instanceof Student); // true