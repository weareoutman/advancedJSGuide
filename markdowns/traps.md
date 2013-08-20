
## 语法陷阱

### `+`

`+` 作为二元运算符时，既可以是数学运算的加法，也可以是字符串的拼接。

```javascript
var a = 1,
	b = 2,
	c = "3",
	d = "4",
	e = null,
	f = undefined,
	g = NaN,
	h = {},
	i = [];

console.log(a + b); // 1 + 2
console.log(c + d); // "3" + "4"

console.log(a + c); // 1 + "3"
console.log(c + a); // "3" + 1

console.log(a + e); // 1 + null
console.log(a + f); // 1 + undefined
console.log(a + g); // 1 + NaN

console.log(c + e); // "3" + null
console.log(c + f); // "3" + undefined
console.log(c + g); // "3" + NaN

console.log(a + h); // 1 + {}
console.log(a + i); // 1 + []

console.log(c + h); // "3" + {}
console.log(c + i); // "3" + []
```

如何决定一段代码中的 `+` 是数学运算还是字符串拼接？

```
a + b:
    pa = ToPrimitive(a)
    pb = ToPrimitive(b)
    if (pa is string || pb is string)
       return concat(ToString(pa), ToString(pb))
    else
       return add(ToNumber(pa), ToNumber(pb))
```

+ 收集 `+` 两端的操作数的**原始值**。
+ 如果其中之一是字符串，则进行字符串拼接。
+ 否则，执行数学加法。

### `with`

`with` 可以将一个语句块的上下文绑定到一个指定对象。

```javascript
with (document) {
	write("foo");
	getElemntById("bar").innerHTML = "foobar";
	alert("Hello world!");
}

// document.write("foo");
// document.getElemntById("bar").innerHTML="foobar";
// window.alert("Hello world!");
```

不推荐使用 `with` 语句：

+ JS 解释器引擎难以对代码执行优化
+ 代码可读性差
+ 可以用闭包等技巧代替

### `;` 自动插入

在语句结束时，你不必手动输入分号，换行即可。

```javascript
function foo() {
	var bar = "value"
	return bar
}

// `{}` 包围的语句块的最后一个语句的分号也可省略
function bar() { return "foo" }
```

过于依赖分号自动插入，将带来一些潜在问题。

```javascript
function foo() {
	return
	{
		bar: 1
	}
}

function bar() {
	var a, b, c, d, e
	a = b + c
	(d + e).toString()

	// a = b + c(d + e).toString();
}
```

### 声明提升

http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html

```javascript
var foo = 1;
function bar() {
	if (! foo) {
		var foo = 10;
	}
	alert(foo);
}
bar();
```

```javascript
var a = 1;
function b() {
	a = 10;
	return;
	function a() {}
}
b();
alert(a);
```

变量的声明、函数的声明将提升到当前函数主体的顶部，而不管这个声明语句是否出现在了不可到达的地方。

```javascript
var foo = 1;
function bar() {
	var foo;
	if (! foo) {
		foo = 10;
	}
	alert(foo);
}
bar();

var a = 1;
function b() {
	function a() {}
	a = 10;
	return;
}
b();
alert(a);
```

### `eval`

`eval` 是 JavaScript 的动态特性之一。

```php
<script>
var func = <?php echo json_encode($user_send['func']); ?>;
eval(func + "()");
function sayHello() {}
function sayGoodbye() {}
</script>
```

但不推荐使用它

+ JS 解释器引擎难以对代码执行优化。
+ `eval` 中传递的字符串中大多包含用户输入数据，易受攻击。
+ `eval` 中的语句代码的可阅读性差。
+ 相对 `eval`，使用等同的函数式编程，将更高效和安全。

### 多行字符串

```javascript
var multiStr = "this is a multi string, \
and this is the second line.";
```

假设我们后期做一些维护：

```javascript
var multiStr = "this is a multi string, \ 
now i want to insert a line right here, \
and this is the second line.";
```

### 变量泄露

```javascript
function foo() {
	var type = "first";

	// do some jobs

	typo = "second";

	// do some else

	return type;
}

foo();
```

### arguments.callee 和 func.caller

递归函数：

```javascript
function factorial(n) {
	return n <= 1 ? 1 : factorial(n - 1) * n;
}
[1, 2, 3, 4, 5].map(factorial);
```

我们不想污染命名空间，匿名函数如何递归？

```javascript
[1, 2, 3, 4, 5].map(function(n) {
	return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
});
```

所幸，我们有 `arguments.callee ` ：

```javascript
[1, 2, 3, 4, 5].map(function(n) {
	return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

+ 访问 `arguments.callee` 或 `func.caller` 的开销是昂贵的。
+ 使用它将导致 JS 解释器难以执行优化。
+ 从 ECMAScript 3 开始，已经支持**有命名函数表达式**。

```javascript
[1, 2, 3, 4, 5].map(function factorial(n) {
	return n <= 1 ? 1 : factorial(n - 1) * n;
});
```
