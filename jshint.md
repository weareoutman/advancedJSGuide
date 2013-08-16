
## JSHint

> JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.  
> JSHint 是一个帮助你检测 JavaScript 代码中的错误和潜在问题的工具。

[JSHint][] 是由 [JSLint][] 分叉(fork)而来的。
JSLint 的作者是著名 JS 权威 Douglas Crockford。
JSHint 的发起者是 Anton Kovalyov ，从一开始就是*社区推动*的。

+ 避免错误和潜在问题
+ 促进团队代码质量

+ `curly`: 在循环语句、条件语句的块(block)两边，始终带上 `{ }` 花括号。
+ `eqeqeq`: 避免使用 `==` 和 `!=`，应使用 `===` 和 `!==`。
+ `es3`: 使用 ECMAScript 3 标准。
+ `forin`: 在 `for in` 循环中，始终使用 `hasOwnProperty` 过滤不期望的属性。
+ `latedef`: 禁止在一个变量声明前使用它。
+ `noarg`: 禁止使用 `arguments.caller` 和 `arguments.callee`。
+ `strict`: 要求所有函数都使用 ECMAScript 5 的严格模式。
+ `undef`: 

[jshint]: http://jshint.com/
[jslint]: http://jslint.com/
