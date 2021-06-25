function binarySearch(array, target) {
	if(array.length === 0) return -1;
  const midIdx = Math.floor(array.length / 2);
	if(target < array[midIdx]){
		return binarySearch(array.slice(0,midIdx), target);
	}else if(target > array[midIdx]){
		const result = binarySearch(array.slice(midIdx+1), target);
		return result === -1 ? -1 : result + midIdx + 1;
	}else{
		return midIdx;
	}
}