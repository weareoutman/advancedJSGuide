/* jshint asi: true */
function foo() {
	return
	{
		bar: 1
	}
}

function bar() {
	var a, b, c, d, e
	a = b + c
	(d + e).toString()

	// a = b + c(d + e).toString();
}