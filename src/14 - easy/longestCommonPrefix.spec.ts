import { testFunction } from './../util/test.util';
import { longestCommonPrefix } from './longestCommonPrefix';

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const TITLE = '14 Longest Common Prefix';
describe(TITLE, () => {
	const tests = [
		{
			input: ['flower', 'flow', 'flight'],
			output: 'fl',
		},
		{
			input: ['dog', 'racecar', 'car'],
			output: '',
		},
	];

	tests.forEach(({ input, output }) =>
		testFunction(TITLE, longestCommonPrefix, input, output)
	);
});
