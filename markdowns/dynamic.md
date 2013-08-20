
## 动态

### 动态类型

`type` 与 `value` 关联，而不是与 `variable`

```javascript
var foo = 1;
foo = "A string";
foo = [1, 2];
foo = new Date();
foo = function(){};
```

### Eval
在运行时，将给定的字符串当作代码语句执行

```javascript
var foo = eval('var bar = 1; return bar');
```

### 对象动态更新

+ 对象的属性和方法都可以在运行时，增加、修改、删除

```javascript
var obj = {
	prop: "value"
};

// 增加方法
obj.other = function(){};
// 修改属性
obj.prop = "new value";
// 删除属性
delete obj.prop;
```

### 反射

```javascript
var obj = {
	foo: "value",
	bar: function() {
		return this.foo;
	}
};

// 使用字符串访问对象的属性或方法
console.log(obj.foo === obj["foo"]);

// 遍历对象的属性和方法
for (var key in obj) {
	console.log(key, obj[key]);
}
```
