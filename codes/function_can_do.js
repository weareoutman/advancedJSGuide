var bind = function(func, target) {
	return function() {
		func.apply(target, arguments);
	};
};

var utils = {
	trim: function(str) {
		return str.replace(/^\s+|\s+$/g, "");
	}
};