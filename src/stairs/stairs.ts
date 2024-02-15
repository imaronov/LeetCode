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

// fib sequence
export const solution_r = (n: number) => {
	const fib = (num: number): number => {
		if (num === 3) return 3;
		if (num === 2) return 2;
		if (num === 1) return 1;
		if (num < 0) return 1;
		else return fib(num - 1) + fib(num - 2) + fib(num - 3);
	};

	return fib(n) + 1;
};
