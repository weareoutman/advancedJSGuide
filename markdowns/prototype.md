
## Prototype-based object-oriented

### Object-based

+ JavaScript几乎是完全基于对象的
+ JavaScript的对象可以理解为一个扩展了原型的关联数组

### Prototype

+ 基于原型的编程，也是面向对象的一种的形式
+ JavaScript使用原型来实现继承，而不是 `class`
	+ 行为重用（继承）是通过复制一个已存在的原型对象来实现的
+ 通过原型我们可以模拟实现大部分的 `class-based` 的特性
+ 又被称作 classless, prototype-oriented or instance-based programming

### Functions as object constructors

+ 对象的构造器是函数
+ 可以理解为，函数同时扮演了两个角色： `class` 和 `function`
+ `new Foo()` 将创建一个继承了 `Foo` 的原型属性和方法的实例对象

### Functions as methods

+ 和其它的面向对象语言不同，JavaScript中，定义函数与定义方法并没有区别
+ 一个函数可以作为一个对象的方法，来调用
	+ 此时，该函数中的 `this` 将指向这个对象

### Inheritance and the prototype chain
