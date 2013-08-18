int function foo(void) {
	int bar = 1;
	{
		int bar = 2;
	}
	return bar; // 1
}