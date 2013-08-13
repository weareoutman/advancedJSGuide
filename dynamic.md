
## Dynamic

### Dynamic Typing

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

### Object Alternation

+ 对象的属性和方法都可以在运行时，增加、修改、删除

```javascript
var obj = {
	prop: "value"
};

obj.prop == obj["prop"]; // true

obj.other = "hehe";
obj.prop = "haha";
delete obj.prop;

for (var key in obj) {
	console.log(key, obj[key]);
}
```

### Reflection

+ 对象的属性或方法的名称是一个字符串键
+ 大部分属性和方法都可以使用 `for ... in` 进行枚举
