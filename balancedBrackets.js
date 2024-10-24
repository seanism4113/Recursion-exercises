function balancedBrackets(string, idx = 0, open = "") {
	const brackets = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	if (idx === string.length) return open === "";

	const char = string[idx];

	if ("([{".includes(char)) {
		return balancedBrackets(string, idx + 1, open + char);
	}

	if (")]}".includes(char)) {
		if (open === "" || open[open.length - 1] !== brackets[char]) {
			return false;
		}

		return balancedBrackets(string, idx + 1, open.slice(0, -1));
	}

	return balancedBrackets(string, idx + 1, open);
}
