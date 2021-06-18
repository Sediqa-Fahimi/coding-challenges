//O(n) time | O(1) space due to our string var will always be English alphabet, not exceeding 26 chars.
function firstNonRepeatingCharacter(string) {
  const charCounts = {};
	
	for(const char of string){
		if(!charCounts[char]) charCounts[char] = 0;
		charCounts[char]++;
	}
	
	for(let i = 0; i < string.length; i++){
		if(charCounts[string[i]] === 1) return i;
	}
  return -1;
}