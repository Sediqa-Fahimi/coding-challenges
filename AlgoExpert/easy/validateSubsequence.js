// O(n) time || O(1) space
function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	for(const num of array){
		if(seqIdx === sequence.length) break;
		if(num === sequence[seqIdx]) seqIdx += 1;
	}
	return seqIdx === sequence.length;
}

// O(n) time || O(1) space
function isValidSubsequence(array, sequence) {
  let i = 0;
	let j = 0;
	while(i < array.length && j < sequence.length){
		if(array[i] === sequence[j]) j++;
		i++;
	}
	return j === sequence.length;
}