//O(n) time || O(n) space
function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 0;
	if(array.length === 1) return array[0];
	
	const maxSums = array.slice();
	maxSums[1] = Math.max(maxSums[0], maxSums[1]);
	for(let i = 2; i < maxSums.length; i++){
		maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + maxSums[i]);
	}
	return maxSums[maxSums.length-1];
}

//O(n) time || O(1) space
function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 0;
	if(array.length === 1) return array[0];
	
	let first = Math.max(array[0], array[1]);
	let second = array[0];
	for(let i = 2; i < array.length; i++){
		let current = Math.max(first, second + array[i]);
		second = first;
		first = current;
	}
	return first;
}