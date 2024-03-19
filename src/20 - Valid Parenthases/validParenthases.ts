export function isValid(s: string): boolean {
	const map = {
		'(': ')',
		'[': ']',
		'{': '}',
	};
	const stack = [];

	const getValue = (key: string) => {
		switch (key) {
			case '(':
				return map['('];
			case '[':
				return map['['];
			case '{':
				return map['{'];
			default:
				return '';
		}
	};

	for (let char in <any>s) {
		if (char in Object.keys(map)) {
			stack.push(char);
		} else if (char in Object.values(map)) {
			const val: string = stack.pop() ?? '';
			if (getValue(char) !== val) {
				return false;
			}
			continue;
		} else {
			return false;
		}
	}

	return true;
}
