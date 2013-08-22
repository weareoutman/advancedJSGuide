var fs = require("fs");

function htmlspecialchars(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function replaceJshintComments(str) {
	return str.replace(/[ \t]*\/\*\s*(jshint|global)\s+[\s\w\,\:\-]+\*\/(?:\r?\n|\r)/, "");
}

module.exports = function(grunt) {

	// 幻灯片名称列表
	var slideList = [
		"cover",
		"current", /*"popular",*/ "misunderstood",
		"feature", "structured", "dynamic", "functional", "scope", "closure",
		"object-oriented", "class", "instance", "constructor", "property", "inheritance",
		"traps", "quality", "test", "automation",
		"thanks"
	];

	// 遍历获取幻灯片文件名
	var slides = [];
	slideList.forEach(function(name){
		slides.push("slides/" + name + ".html");
	});
	slides.unshift("src/intro.html");
	slides.push("src/outro.html");

	// 遍历获取示例代码文件内容
	var codes = {};
	var codeDirs = ["codes", "bad-codes"];
	codeDirs.forEach(function(dir){
		var codeList = fs.readdirSync(dir);
		codeList.forEach(function(name){
			var key = name.replace(/\.[^\.]+/, "");
			codes[key] = replaceJshintComments(htmlspecialchars(fs.readFileSync(dir + "/" + name).toString("utf8")));
		});
	});

	codes.Gruntfile = htmlspecialchars(fs.readFileSync("Gruntfile.js").toString("utf8"));

	// 配置
	grunt.initConfig({
		// pkg: grunt.file.readJSON("package.json"),
		codes: codes,
		concat: {
			options: {
				separator: "\n\n",
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
			dist: ["Gruntfile.js", "dist/main.js", "codes/*.js"]
		},
		uglify: {
			impress: {
				src: "dist/impress.js",
				dest: "dist/impress.min.js",
			}
		},
		qunit: {
			all: ["test/*.html"]
		}
	});

	// 载入任务
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-qunit");

	// 注册任务
	grunt.registerTask("default", ["jshint", "concat:dist"]);

	grunt.registerTask("impress", ["uglify:impress"]);
	grunt.registerTask("test", ["qunit"]);
};