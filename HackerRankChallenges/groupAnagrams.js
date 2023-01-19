// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// O(N * M) time | O(N * M) space
var groupAnagrams = function(strs){
    const anagrams = {};
    const count = new Array(26);
    
    for(let str of strs){ 
        count.fill(0);
        let strArr = str.split("");
        for(let char of strArr){ 
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let keyArr = [];
        for(i = 0; i < 26; i++){
            keyArr.push("#");
            keyArr.push(count[i]);
        }
        let keyStr = keyArr.join("");
        
        if(!anagrams[keyStr]) anagrams[keyStr] = [str];
        else anagrams[keyStr].push(str);
        
    }
    return Object.values(anagrams);
}

// O(N * MlogM) time | O(NM) space
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