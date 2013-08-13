
## Functional

### First-class functions

+ 一个函数可以作为参数传递，作为返回值被返回，赋值给一个变量，或者存储在一个数据结构中
+ 也就是说，函数就是一个普通的变量类型
+ 函数也是一个对象，拥有它自己的属性和方法，如 `call()`, `apply()`

```javascript
var bind = function(func, target) {
	return function() {
		func.apply(target, arguments);
	};
};

var utils = {
	"trim": function(str){
		return str.replace(/^\s+|\s+$/g, "");
	}
};
```

### Closures

函数可以嵌套。即，在一个函数中，定义另一个函数
+ 每次外部函数的调用，内嵌函数都会被创建一次
+ 这就形成了一个闭包：外部函数的作用域，包括任何本地变量、参数等上下文，
	会变成每个内嵌函数对象的内部状态的一部分，
	即使在外部函数执行完并退出以后

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

scope chain :

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

scope-3 scope-2 scope-1 global-scope
3
undefined
2
undefined
1
undefined
0
```

### Function scope

JavaScript拥有 `function scope`，而C语言则是 `block scope`

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

### Variadic functions

+ 函数的参数数量没有限制
+ 可以通过参数名或者 `arguments` 对象来访问参数
