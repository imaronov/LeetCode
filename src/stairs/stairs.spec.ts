import { testFunction } from '../util/test.util';
import { solution } from './stairs';

const TITLE = 'Brackets';
describe(TITLE, () => {
	const tests = [
		{
			input: 3,
			output: 4,
		},
		{
			input: 4,
			output: 7,
		},
	];

	tests.forEach(({ input, output }) =>
		testFunction(TITLE, solution, input, output)
	);
});
