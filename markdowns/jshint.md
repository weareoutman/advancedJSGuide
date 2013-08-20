
## JSHint

### Strict mode

ECMAScript 5 引入了严格模式。关于严格模式，你可以参考[这篇文档][strict]。

+ 普通模式下的一些静默的错误，在严格模式下，将抛出异常。
+ 避免使用让JS引擎难以执行优化的操作。
+ 禁止一些看起来像是未来 ECMAScript 版本才有的语法。

> JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.  
> JSHint 是一个帮助你检测 JavaScript 代码的错误和潜在问题的工具。

[JSHint][] 是由 [JSLint][] 分叉（fork）而来的。
JSLint 的作者是著名 JS 权威 Douglas Crockford。
JSHint 的发起者是 Anton Kovalyov，是社区推动的。

### JSHint 配置

强制选项：

+ `curly` : 在循环和条件块两边，始终带上 `{ }`。
	+ 导致潜在问题、代码误读。
+ `eqeqeq` : 禁止使用 `==` 和 `!=`，而应使用 `===` 和 `!==`。
	+ 可能导致不期望的结果。
+ `es3` : 使用 ECMAScript 3 规范。
	+ 兼容老版本的浏览器 IE 6/7/8。
+ `forin` : 要求在 `forin` 循环里使用 `hasOwnProperty()` 过滤属性。
	+ 避免遍历到不期望的属性（从原型链继承的）。
+ `latedef` : 禁止在一个变量声明前使用它。
	+ JS 的 `function scope` 会将所有变量和函数声明"提升"（[hoisted][]）。
	+ 在一个变量声明前使用它，会导致令人讨厌的错误。
	+ 设置这个属性为 `"nofunc"` 可以忽略函数声明。
+ `noarg` : 禁止使用 `arguments.caller` 和 `func.caller`。
	+ 使用这两个属性将导致代码难以被JS引擎优化。
	+ 在未来的 JavaScript 中是被启用的。
+ `quotmark` : 引号一致性
+ `undef` : 禁止使用明显未声明的变量。
	+ 发现打错的变量名、意外创建的全局变量。
+ `strict` : 要求所有函数运行在 ECMAScript 5 的严格模式下。
+ `trailing` : 禁止行尾空白。
	+ 行尾空白是导致多行字符串bug的源头。
+ `maxdepth` : 控制代码块最大嵌套深度。
+ `maxstatements` : 控制每个函数最大语句数。

松散选项：

+ `asi` : 静默分号缺失的警告。
	+ 自动分号插入，可能导致不期望的结果，减少代码的可阅读性。
	+ 但所有浏览器都支持这个 JavaScript 规则。
+ `boss` : 允许在期望是比较运算的地方使用赋值表达式。
	+ 这种情况更多的是打字错误。
	+ 但也有反之的情况。
+ `evil` : 允许使用 `eval`。
	+ `eval` 不被推荐使用。
	+ 导致代码容易受到注入攻击。
	+ 使JS引擎难以对代码做优化。
+ `multistr` : 允许多行字符串。
	+ 多行字符串是危险的。如果你意外的在多行字符串的 `\` 后放置了一个空格，这将导致语法错误。

[jshint]: http://jshint.com
[jslint]: http://jslint.com
[hoisted]: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
[strict]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
