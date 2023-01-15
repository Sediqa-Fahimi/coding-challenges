// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs){
	const groups = {};
	for(let str of strs){
		let sorted = str.split("").sort().join("");
		groups[sorted] ? groups[sorted].push(str) : groups[sorted] = [str];
	}
	return Object.values(groups);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));