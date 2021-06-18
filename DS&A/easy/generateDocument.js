//O(n+m) time | O(c) space , n = length of characters, m = length of document, c = number of unique chars in characters.
function generateDocument(characters, document) {
    const charCounts = {};
	
	for(const char of characters){
		if(!charCounts[char]) charCounts[char] = 0;
		
		charCounts[char]++;
	}
	
	for(const char of document){ 
		if(!(char in charCounts) || charCounts[char] === 0) return false;
		charCounts[char]--;
	}
    return true;
}