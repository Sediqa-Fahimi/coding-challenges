//O(nlogn) time | O(n) space
function mergeOverlappingIntervals(array) {
  const sortedArray = array.sort((a,b) => a[0] - b[0]);
	
	const mergedIntervals = [];
	let currentInterval = sortedArray[0];
	mergedIntervals.push(currentInterval);
	
	for(const nextInterval of sortedArray){
		const [_, currentIntervalEnd] = currentInterval;
		const [nextIntervalStart, nextIntervalEnd] = nextInterval;
		if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd,nextIntervalEnd);
		else{
			currentInterval = nextInterval;
			mergedIntervals.push(currentInterval);
		}
	}
	return mergedIntervals;
    
}