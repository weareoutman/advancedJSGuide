/* global alert */
var foo = 1;
function bar() {
	var foo;
	if (! foo) {
		foo = 10;
	}
	alert(foo);
}
bar();

var a = 1;
function b() {
	function a() {}
	a = 10;
	return;
}
b();
alert(a);