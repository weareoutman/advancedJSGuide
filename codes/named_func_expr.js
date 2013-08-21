[1, 2, 3, 4, 5].map(function factorial(n) {
	return n <= 1 ? 1 : factorial(n - 1) * n;
});