[1, 2, 3, 4, 5].map(function(n) {
	return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});