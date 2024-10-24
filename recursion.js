/** product: calculate the product of an array of numbers. */
function product(nums, idx = 0) {
	if (nums.length === 0) return 0;
	if (nums.length === idx) return 1;
	return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */
function longest(words, idx = 0) {
	if (idx === words.length) return 0;
	return Math.max(words[idx].length, longest(words, idx + 1));
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0) {
	if (idx >= str.length) return "";
	return str[idx] + everyOther(str, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, leftIdx = 0, rightIdx = str.length - 1) {
	if (leftIdx >= rightIdx) return true;
	if (str[leftIdx] !== str[rightIdx]) return false;
	return isPalindrome(str, leftIdx + 1, rightIdx - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0) {
	if (idx === arr.length) return -1;
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str, idx = str.length - 1) {
	if (idx < 0) return "";
	return str[idx] + revString(str, idx - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
	let newArray = [];
	for (let key in obj) {
		if (typeof obj[key] === "string") newArray.push(obj[key]);
		if (typeof obj[key] === "object") newArray.push(...gatherStrings(obj[key]));
	}
	return newArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, startIdx = 0, endIdx = arr.length - 1) {
	if (startIdx > endIdx) return -1;

	let midIdx = Math.floor((startIdx + endIdx) / 2);

	if (arr[midIdx] === val) return midIdx;

	if (val > arr[midIdx]) {
		return binarySearch(arr, val, midIdx + 1, endIdx);
	} else {
		return binarySearch(arr, val, startIdx, midIdx - 1);
	}
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
