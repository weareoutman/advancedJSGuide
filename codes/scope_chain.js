var scope = 0, zero = "global-scope";
(function(){
	var scope = 1, one = "scope-1";
	(function(){
		var scope = 2, two = "scope-2";
		(function(){
			var scope = 3, three = "scope-3";
			// scope-3 scope-2 scope-1 global-scope
			console.log([three, two, one, zero].join(" "));
			console.log(scope); // 3
		})();
		console.log(typeof three); // undefined
		console.log(scope); // 2
	})();
	console.log(typeof two); // undefined
	console.log(scope); // 1
})();
console.log(typeof one); // undefined
console.log(scope); // 0