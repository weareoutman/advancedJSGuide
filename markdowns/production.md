
## 生产

JavaScript 是一门解释性语言，没有编译的过程，源代码即是产品。

+ 要保证代码的良好可读性、高可维护性，需要完善的注释、空行、明确的变量命名等。
	+ 这将增加代码文件的体积。
+ 运行在Web浏览器中的 JS 代码，需要进行网络传输。
	+ 需要尽量减少传输的体积。

我们需要一个*分离开发环境的代码和生产环境的代码*的工具。

对于 JavaScript ，简单来说就是一个压缩工具。

+ Google Closure Compiler
+ YUI Compressor
+ UglifyJS

三个工具都是很强大且灵活的跨平台工具。前两者使用 Java 实现，后者使用 JavaScript。
Google Closure Compiler 和 UglifyJS 还支持生成 source-map 文件。
