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