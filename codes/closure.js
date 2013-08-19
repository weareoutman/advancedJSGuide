function bind(func, target) {
	return function() {
		func.apply(target, arguments);
	};
}

function foo(bar) {
	console.log(this.count += bar);
}

var counterA = { count: 0 };
var counterB = { count: 0 };

var increaseA = bind(foo, counterA);
var increaseB = bind(foo, counterB);

increaseA(1); // 1
console.log(counterA.count); // 1
console.log(counterB.count); // 0

increaseB(2); // 2
increaseB(3); // 5
console.log(counterA.count); // 1
console.log(counterB.count); // 5