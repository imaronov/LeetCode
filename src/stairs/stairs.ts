export const solution = (n: number) => {
	// you can jump 1,2,3 at a time

	let one = 3;
	let two = 2;
	let three = 1;

	for (let i = 0; i < n - 3; i++) {
		const temp = one;
		one = one + two + three;
		two = two + three;
		three = temp;
	}

	return one + 1;
};
