/* global test, ok, equal, strictEqual, deepEqual, expect */
test("traps of +", function() {
	expect(14);

	strictEqual(1 + 2, 3);
	strictEqual("3" + "4", "34");

	strictEqual(1 + "3", "13");
	strictEqual("3" + 1, "31");

	strictEqual(1 + null, 1);
	ok(isNaN(1 + undefined));
	ok(isNaN(1 + NaN));

	strictEqual("3" + null, "3null");
	strictEqual("3" + undefined, "3undefined");
	strictEqual("3" + NaN, "3NaN");

	strictEqual(1 + {}, "1[object Object]");
	strictEqual(1 + [], "1");

	strictEqual("3" + {}, "3[object Object]");
	strictEqual("3" + [], "3");
});