export function romanToInt(s: string): number {
	const symMap = {
		CM: 900,
		XC: 90,
		IV: 4,
		III: 3,
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;
	Object.entries(symMap).forEach(([key, value]) => {
		if (s.includes(key)) {
			total = total + value;
			s = s.replace(key, "").trim();
		}
	});

	return total;
}
