# JavaScript Features

## JavaScript is popular

+ 作为所有现代Web浏览器的唯一指定编程语言，垄断地位现阶段无法撼动
+ 互联网与移动互联网的广泛流行，推动这一Web前端核心技术的不断发展
+ Node.js 的流行，让我们看到了 JavaScript 在非浏览器领域的未来
+ On [GitHub.com][github]
	+ 21% 的[仓库(项目)][top-languages]的主要编程语言是 JavaScript
	+ [打星最多][polular-starred]的仓库前15中，JavaScript项目占据9个，包括排在前三的 [Bootstrap][]、[Node.js][]、[jQuery][]
+ On [StackOverflow.com][stackoverflow]
	+ [最流行][popular-tags](提问最多)的标签，JavaScript 排在第4，仅次于 C#, Java, PHP, 这还不包括排在第6的 jQuery
+ JavaScript 开发者们热衷于开源社区，热爱从中学习，并参与贡献

当然，这两个网站上的所谓的流行趋势，并不能代表一切（它可能更多的代表了Web相关领域），但它至少说明了 JavaScript 是当今世界最流行的编程语言之一，JavaScript 开发者们热衷于开源社区，从中学习，并参与贡献。

## JavaScript is misunderstood

+ 在产品经理的眼中 => 可以设置按钮的动作，甚至能弹出一个警告框
+ 在设计师的眼中 => 我听说过，Java 嘛
+ 在 C/C++ 开发者眼中 => 网页制作？渣渣。有点出息好吗
+ 在 PHP 开发者眼中 => Ajax, Ajax, Ajax
+ 在入门 JavaScript 开发者眼中 => 难以调试、容易出错、莫名其妙、说好的面向对象呢？
+ 在进阶 JavaScript 开发者眼中 => 

[JavaScript: The World's Most Misunderstood Programming Language][misunderstood] - Douglas Crockford

+ 名称
	+ JavaScript 与 Java 无关
		+ JavaScript 在语法上类似于 Java，就像 Java 与 C 一样
	+ JavaScript 是一门脚本语言
		+ 与 C 相比，它牺牲了性能，以提升表现力和动态特性
+ 函数式编程语言
	+ JS 并不是通常的过程式编程语言，它更应该被称作是函数式编程语言
+ 定位
	+ JS 并非只适合作为Web浏览器的编程语言，它能够适用在更多的应用和场景
+ 设计失误
	+ 没有一门语言是完美的
	+ `+` 号被同时用作数字的加法，以及字符串的拼接
	+ `with` 语句
	+ `;` 自动插入
+ 业余/入门 开发者
	+ JavaScript 门槛低
		+ 不严谨的编程风格
	+ JavaScript 有许多语法陷阱
		+ 没有足够的经验，来编写*良好*的 JavaScript 程序
	+ 在很多 JavaScript 的书籍、技术博客里，包含一些错误的示例、糟糕的编程实践等
		+ 撰写新的、继承了这些错误和实践的技术博客、学习总结
+ JS 是面向对象的吗？
	+ 继承
	+ 聚合
	+ 封装

## JavaScript has expressive power

+ C-like Structured
+ Dynamic
+ Functional
+ Prototype-based object-oriented

### Array and object literals

+ 数组和对象可以通过一个非常简洁的快捷语法来创建 - 对象字面量
+ 实际上，这样的字面量是JSON数据格式的基本构成

[github]: https://github.com/
[top-languages]: https://github.com/languages
[polular-starred]: https://github.com/popular/starred
[bootstrap]: https://github.com/twbs/bootstrap
[node.js]: http://github.com/joyent/node
[jquery]: http://github.com/jquery/jquery
[stackoverflow]: http://stackoverflow.com/
[popular-tags]: http://stackoverflow.com/tags?tab=popular
[misunderstood]: http://www.crockford.com/javascript/javascript.html
