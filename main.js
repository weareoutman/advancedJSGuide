/* global hljs, impress */

hljs.tabReplace = "    ";
hljs.initHighlighting();

if (! /impress=no/.test(location.search)) {
	var steps = document.querySelectorAll("#impress > .step"),
		deltaX = 1200,
		deltaY = 900,
		deltaZ = 2000,
		right = 0,
		down = 1,
		under = 2,
		upon = 3,
		last,
		x = 0,
		y = 0,
		z = 0;
	var random = function() {
		var next = Math.floor(Math.random() * 4);
		if ((next === under && last === upon) || (next === upon && last === under)) {
			return random();
		}
		switch (next) {
			case right:
				x += deltaX;
				break;
			case down:
				y += deltaY;
				break;
			case under:
				z -= deltaZ;
				break;
			case upon:
				z += deltaZ;
				break;
			default:
				throw "unexpected position";
		}
		last = next;
	};
	Array.prototype.forEach.call(steps, function(step, index){
		step.dataset.x = x;
		step.dataset.y = y;
		step.dataset.z = z;
		if (step.id === "about-this") {
			if (last === under) {
				z -= deltaZ;
				last = under;
			} else {
				z += deltaZ;
				last = upon;
			}
		} else {
			random();
		}
	});
	impress().init();
}
