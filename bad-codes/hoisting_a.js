var foo = 1;
function bar() {
	// 这个条件成立吗？
	if (! foo) {
		var foo = 10;
	}
	alert(foo);
}
bar();