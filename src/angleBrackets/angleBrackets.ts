export const solution = (angles: string) => {
	// if > then add < to begining

	// if < check next char is > or end is >
	// then add > to the end

	let prefix = '';
	let suffex = '';
	for (let i = 0; i < angles.length; i++) {
		const curr = angles[i];
		const next = angles[i + 1];
		const last = angles[angles.length - 1];

		if (curr === '<') {
			suffex = suffex.concat(next !== '>' && last !== '>' ? '>' : '');
			if (next === '>') {
				i = i + 1;
			}
		} else {
			// console.log({ i, angles });
			prefix = '<'.concat(prefix);
		}
	}

	return prefix.concat(angles.concat(suffex));
};
