
## Functional

### First-class functions

> 函数是 JavaScript 的一等公民。

这句话可以理解为函数在 JavaScript 中，拥有第一级别的权利。

+ 函数可以做哪些事？
	+ 作为参数传递
	+ 作为另一个函数的返回值
	+ 赋值给一个变量
	+ 作为对象的一个方法
+ 函数可以被当作一个普通的变量类型
+ 函数也是一个对象，拥有它自己的属性和方法，如 `call()`, `apply()`

```javascript
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
```

### Variadic functions

+ 函数的参数数量没有限制
+ 可以通过参数名或者 `arguments` 对象来访问参数

`arguments` 拥有数组的外观，可以通过数字下标访问各个参数，但它并不是数组。

```javascript
(function(){
	console.log(arguments instanceof Array); // false
	console.log(arguments.slice); // undefined

	// 可以使用一点小技巧来实现对 arguments 对象的数组相关操作
	var arg1 = arguments[0],
		argsElse = Array.prototype.slice.call(arguments, 1);
	console.log(arg1); // 1
	console.log(argsElse); // [2, 3]
})(1, 2, 3);
```

### Function scope

JavaScript 有两种作用域 `global scope` 和 `function scope`，而C语言则是 `block scope`

C语言中的 `block scope` :

```c
int function foo(void) {
	int bar = 1;
	{
		int bar = 2;
	}
	return bar; // 1
}
```

JavaScript中的 `function scope` :

```javascript
function foo() {
	var bar = 1;
	{
		var bar = 2;
	}
	return bar; // 2
}
```

### Scope chain

在 JavaScript 代码中，访问一个变量时，会从本地变量和参数开始，逐级向上遍历作用域直到 `global scope`

```javascript
var scope = 0, zero = "global-scope";
(function(){
	var scope = 1, one = "scope-1";
	(function(){
		var scope = 2, two = "scope-2";
		(function(){
			var scope = 3, three = "scope-3";
			console.log([three, two, one, zero].join(" "));
			console.log(scope);
		})();
		console.log(typeof three);
		console.log(scope);
	})();
	console.log(typeof two);
	console.log(scope);
})();
console.log(typeof one);
console.log(scope);

// scope-3 scope-2 scope-1 global-scope
// 3
// undefined
// 2
// undefined
// 1
// undefined
// 0
```

### Closures

在一个函数中，定义另一个函数，称为函数嵌套。函数的嵌套将形成一个闭包。
内嵌的函数是它的外部函数所私有的。
内嵌的函数是一个闭包，意味着这个内嵌函数可以"继承"它的外部函数的参数和变量。
换一个说法，就是内嵌函数包含了外部函数的作用域。

+ 内嵌函数只能被其外部函数内的语句访问。
+ 内嵌函数形成一个闭包：内嵌函数可以访问外部函数的参数和变量，而外部函数不能访问内嵌函数的参数和变量。
+ 每次外部函数的调用，内嵌函数都会被创建一次。
	+ 此时，外部函数的作用域（包括任何本地变量、参数等上下文），会成为每个内嵌函数对象的内部状态的一部分，
	  即使在外部函数执行完并退出后。

```javascript
var bind = function(func, target) {
	return function() {
		func.apply(target, arguments);
	};
};

function foo() {
	console.log(++ this.count);
}

var counter = {
	count: 0
};

var bar = bind(foo, counter);

bar(); // 1
bar(); // 2
console.log(counter.count); // 2
```
