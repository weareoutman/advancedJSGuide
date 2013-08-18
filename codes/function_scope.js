function foo() {
	var bar = 1;
	{
		/* jshint -W004 */
		var bar = 2;
	}
	return bar; // 2
}