
## Code quality

+ JavaScript 有太多的语法陷阱。
	+ 如何避免语法陷阱？
+ JavaScript 灵活、开发效率高，我们可以非常轻易地实现大多数需求
	+ 如何保证代码质量？

### Strict mode

+ 普通模式下的一些静默的错误，在严格模式下，将抛出异常。
+ 避免使用一些让 JS 解释器引擎难以执行优化的操作。

```javascript
function foo() {
	"use strict";

	// now foo is in strict mode

	function bar() {
		// in strict mode too
	}
}
```

+ 防止意外的创建全局变量。不能再为一个没有声明的变量赋值。
+ 对象字面量中的属性名称必须是唯一的。
+ 函数的各个参数名称必须是唯一的。
+ 禁用 `with` 语句。
+ `eval` 中严格模式的代码，不会将新的变量引入到当前作用域中
+ 禁用 `arguments.callee` , `func.caller` , `func.arguments` 。
+ 新增了一些保留关键字 implements, interface, let, package, private, protected, public, static, yield 。

### JSHint

+ `strict mode` 能力有限。
+ 它需要你的代码运行起来，才能通知你出问题了。
+ 它不能对使用 ES3 标准的浏览器起效。

许多编程语言都有代码质量工具。
JavaScript 中一款优秀的代码质量工具 -- JSHint。

> JSHint 是一个帮助你检测 JavaScript 代码的错误和潜在问题的工具。

[JSHint][] 是由 [JSLint][] 分叉（fork）而来的。
JSLint 的作者是著名 JS 权威 Douglas Crockford。
JSHint 的发起者是 Anton Kovalyov，JSHint 是社区推动的。

JSHint 本身使用 JavaScript 开发，因此既可以运行在浏览器中，也可以运行在 Node.js 平台。

+ 足够全面的功能
+ 足够灵活的配置
+ 足够多的应用场景
	+ 在官方网站上粘贴代码，点击按钮。
	+ 安装 Node.js 包，在命令行运行。
	+ 为你的代码编辑器增加一个插件。
	+ 配置在自动任务工具中。
