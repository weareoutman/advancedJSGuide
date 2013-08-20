
## Prototype-based object-oriented

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

### Class

JavaScript 中没有 `class` 。
`function` 即 `class` 。

```javascript
function Person() { }
```

### 对象 - 类的实例

使用 `new Func` 将创建一个 `Func` 的实例。

```javascript
function Person() { }
var lilei = new Person();
var hanmeimei = new Person();
```

### 构造器

`function` 即 `constructor` 。

```javascript
function Person() {
	console.log("A person is born");
}
var lilei = new Person();
console.log(lilei.constructor === Person); // true
```

### 属性和方法

通过关键字 `this` 或构造器(函数)的 `prototype` 来设置属性和方法

```javascript
function Person(gender) {
	this.gender = gender || "unkown";
}

Person.prototype.sayHello = function() {
	console.log("Hello world!");
};

var lilei = new Person();
var hanmeimei = new Person();
```

### 继承

JavaScript 中通过将子类的 `prototype` 赋值为父类的一个实例，来实现继承。
在 ES5 标准中，可以使用 `Object.create()` 实现继承。

```javascript
function Student() {
	Person.call(this);
}

Student.prototype = new Person();
// Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
	console.log("Hello school!");
};

Student.prototype.sayGoodbye = function() {
	console.log("Goodbye school!");
};

var lilei = new Student();

lilei.sayHello();
lilei.sayGoodbye();

console.log(lilei instanceof Person);  // true
console.log(lilei instanceof Student); // true
```

### 原型链

访问一个对象的属性时，会先从自身属性开始，向上追溯原型链，直到找到这个属性，或者遇到 null 为止。

```javascript
// lilei --> student --> person --> Object.prototype --> null

var person = {
	gender: "unkown",
	sayHello: function() {
		console.log("Hello world!");
	},
	walk: function() {
		console.log("I am walking");
	}
};

var student = Object.create(person);

student.sayHello = function() {
	console.log("Hello school!");
};
student.study = function() {
	console.log("I am studying!");
};

var lilei = Object.create(student);
lilei.gender = "male";

console.log(lilei.gender);
lilei.walk();
lilei.sayHello();
lilei.study();

console.log(person.gender);
delete lilei.gender;
console.log(lilei.gender);
console.log(person.gender);

// lilei --> student --> person --> Object.prototype --> null

console.log(student.isPrototypeOf(lilei)); // true
console.log(person.isPrototypeOf(student)); // true
console.log(Object.prototype.isPrototypeOf(person)); // true
console.log(null === Object.prototype.__proto__); // true
```
