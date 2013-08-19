function Person() {
	console.log("A person is born");
}
var lilei = new Person();
console.log(lilei.constructor === Person); // true