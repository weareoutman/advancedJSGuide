
var fs = require("fs");

function htmlspecialchars(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

module.exports = function(grunt) {

	// 幻灯片名称列表
	var slideList = [
		"cover",
		"current", "on-stackoverflow", "on-github", "popular",
		"misunderstood", "other-eyes", "mis-name", "typecast", "design-error", "amateur", "is-it-object-oriented",
		"feature",
		"structured",
		"dynamic", "eval", "object-alternation", "reflection",
		"functional", "function-can-do", "variadic",
		"scope", "scope-chain", "nested-function", "closure", "closure-2",
		"object-oriented", "class", "instance", "constructor", "property", "inheritance"
	];

	// 遍历获取幻灯片文件名
	var slides = [];
	slideList.forEach(function(name){
		slides.push("slides/" + name + ".html");
	});
	slides.unshift("src/intro.html");
	slides.push("src/outro.html");

	// 遍历获取示例代码文件内容
	var codeList = fs.readdirSync("codes");
	var codes = {};
	codeList.forEach(function(name){
		codes[name.replace(/\.[^\.]+/, "")] = htmlspecialchars(fs.readFileSync("codes/" + name).toString("utf8"));
	});

	// 配置
	grunt.initConfig({
		// pkg: grunt.file.readJSON("package.json"),
		codes: codes,
		concat: {
			options: {
				process: true
			},
			dist: {
				// src: ["src/intro.html", "slides/cover.html", "src/outro.html"],
				src: slides,
				dest: "dist/index.html"
			}
		},
		jshint: {
			options: {
				"jshintrc": ".jshintrc"
			},
			all: ["Gruntfile.js", "dist/main.js", "codes/*.js"]
		}
	});
	
	// 载入任务
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	
	// 注册任务
	grunt.registerTask("default", ["jshint:all", "concat:dist"]);
};