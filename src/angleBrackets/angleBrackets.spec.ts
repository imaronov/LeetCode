import { testFunction } from '../util/test.util';
import { solution } from './angleBrackets';

const TITLE = 'Brackets';
describe(TITLE, () => {
	const tests = [
		{
			input: '><<><',
			output: '<><<><>>',
		},
		{
			input: '>>',
			output: '<<>>',
		},
		{
			input: '>><<',
			output: '<<>><<>>',
		},
		{
			input: '><><<><<<',
			output: '<><><<><<<>>>>',
		},
	];

	tests.forEach(({ input, output }) =>
		testFunction(TITLE, solution, input, output)
	);
});
