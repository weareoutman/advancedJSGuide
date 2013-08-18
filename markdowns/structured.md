
## Structured

JavaScript的结构化编程语法，和C语言非常相似 (if / for / while / switch)

```javascript
if (LiLei.money >= 1e6 && LiLei.house >= 1) {
	LiLei.marry(HanMeimei);
} else {
	LiLei.dieAlone();
}

// 循环语句
while (LiLei.money < 1e6 && LiLei.house === 0) {
	LiLei.writeCodes();
}

// 选择语句
switch (LiLei.workHoursPerDay) {
	case 0: case 1: /* ... */ case 7:
		company.fire(LiLei);
		break;
	case 8:
		company.pay(LiLei, 3000);
		break;
	case 9:
		company.pay(LiLei, 4000);
		break;
	/* ... */
	case 24:
		LiLei.die();
}
```
