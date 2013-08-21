
/*global hljs, Chart, impress */

hljs.tabReplace = "    ";
hljs.initHighlighting();

/*(function(){
	var ctx = document.getElementById("canvas-github-pie").getContext("2d");
	new Chart(ctx).Pie(data, options);
})();*/

if (! window.noImpress) {
	var steps = document.querySelectorAll("#impress > .step"),
		deltaX = 1200,
		deltaY = 900,
		x, y;
	Array.prototype.forEach.call(steps, function(step, index){
		if (step.id === "thanks") {
			step.dataset.x = x * deltaX;
			step.dataset.y = y * deltaY;
			step.dataset.z = 1500;
			return;
		}
		x = index % 5;
		y = Math.floor(index / 5);
		step.dataset.x = x * deltaX;
		step.dataset.y = y * deltaY;
	});
	impress().init();
}