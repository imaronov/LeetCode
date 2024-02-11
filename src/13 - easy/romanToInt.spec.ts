import { romanToInt } from "./romanToInt";
import { testFunction } from "./../util/test.util";

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

describe("13 Roman To Intiger", () => {
	const tests = [
		{
			input: "III",
			output: 3,
		},
		{
			input: "LVIII",
			output: 58,
		},
		{
			input: "MCMXCIV",
			output: 1994,
		},
		{
			input: "IX",
			output: 9,
		},
	];

	tests.forEach(({ input, output }) =>
		testFunction("13 Roman To Intiger", romanToInt, input, output)
	);
});
