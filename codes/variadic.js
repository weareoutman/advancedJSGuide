(function(){
	// `arguments` 拥有数组的外观，可以通过数字下标访问各个参数
	var arg1 = arguments[0], // 1
		arg2 = arguments[1]; // 2

	// 但它并不是数组
	console.log(arguments instanceof Array); // false
	console.log(arguments.slice); // undefined

	// 对 arguments 进行数组相关操作
	var argElse = Array.prototype.slice.call(arguments, 2);
	console.log(argElse); // [3, 4]
})(1, 2, 3, 4);