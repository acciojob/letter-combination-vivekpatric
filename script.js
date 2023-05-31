let keyPad = {
	0: ['0'],
	1: ['1'],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
}
function letterCombinations(input_digit) {
	  let res = [];
	  findCombinations(input_digit, 0, "", res);
	  return res;
}

function findCombinations(num, idx, comb, res) {
	if(idx == num.length) {
		res.push(comb);
		return;
	}

	let keys = keyPad[num.charAt(idx)];
	for (let char of keys) {
		findCombinations(num, idx+1, comb + char, res);
	}
}

module.exports = letterCombinations;
