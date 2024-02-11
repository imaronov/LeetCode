export function romanToInt(s: string): number {
	const intToRoman = [
		{ key: 'I', value: 1 },
		{ key: 'V', value: 5 },
		{ key: 'X', value: 10 },
		{ key: 'L', value: 50 },
		{ key: 'C', value: 100 },
		{ key: 'D', value: 500 },
		{ key: 'M', value: 1000 },
	];

	const getValue = (key: string) =>
		intToRoman.find((item) => item.key === key)?.value ?? 0;

	let total = 0;
	for (let i = 0; i < s.length; i++) {
		const cur = s[i];
		const curValue = getValue(cur);
		const nextValue = getValue(s[i + 1]);

		if (i + 1 < s.length && nextValue > curValue) {
			total = total - curValue;
		} else {
			total = total + curValue;
		}
	}

	return total;
}
