export const testFunction = (
	title: string,
	cb: any,
	input: any,
	output: any
) => {
	it(`${title}. input: ${input}, output: ${output}`, () => {
		expect(cb(input)).toBe(output);
	});
};
