import { testFunction } from '../util/test.util';
import { isValid } from './validParenthases';

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const TITLE = '14 Longest Common Prefix';
describe(TITLE, () => {
	const tests = [
		{
			input: '()',
			output: true,
		},
		{
			input: '()[]{}',
			output: true,
		},
		{
			input: '(]',
			output: false,
		},
		{
			input: '{[]}',
			output: true,
		},
		{
			input: '){',
			output: false,
		},
	];

	tests.forEach(({ input, output }) =>
		testFunction(TITLE, isValid, input, output)
	);
});
