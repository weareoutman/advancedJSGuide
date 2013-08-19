function Person(gender) {
	this.gender = gender || "unkown";
}

Person.prototype.sayHello = function() {
	console.log("Hello world!");
};

var lilei = new Person();
var hanmeimei = new Person();