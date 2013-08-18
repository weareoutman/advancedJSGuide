function bind(func, target) {
	return function() {
		func.apply(target, arguments);
	};
}