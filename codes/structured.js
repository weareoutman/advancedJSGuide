/* global lilei, hanmeimei, company */
// 条件语句
if (lilei.money >= 1e6 && lilei.house >= 1) {
	lilei.marry(hanmeimei);
} else {
	lilei.dieAlone();
}

// 循环语句
while (lilei.money < 1e6 && lilei.house === 0) {
	lilei.writeCodes();
}

// 选择语句
switch (lilei.workHoursPerDay) {
	case 0: case 1: /* ... */ case 7:
		company.fire(lilei);
		break;
	case 8:
		company.pay(lilei, 3000);
		break;
	case 9:
		company.pay(lilei, 4000);
		break;
	/* ... */
	case 24:
		lilei.die();
}