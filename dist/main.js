
/*global hljs, Chart, impress */

hljs.tabReplace = "    ";
hljs.initHighlighting();

/*(function(){
	var ctx = document.getElementById("canvas-github-pie").getContext("2d");
	new Chart(ctx).Pie(data, options);
})();*/

(function(){
	var steps = document.querySelectorAll("#impress > .step"),
		deltaX = 1200,
		deltaY = 900;
	Array.prototype.forEach.call(steps, function(step, index){
		var x = index % 10,
			y = Math.floor(index / 10);
		step.dataset.x = x * deltaX;
		step.dataset.y = y * deltaY;
	});
})();

impress().init();
