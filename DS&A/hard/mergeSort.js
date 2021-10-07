// sort left half
// sort right half
// merge sorted halves
// best,average,worst: O(nlogn) Time
function mergeSort(array) {
	if(array.length === 1) return array;

    const midIdx = Math.floor(array.length/2);
    
	const sortedLeft = mergeSort(array.slice(0,midIdx));
   
	const sortedRight = mergeSort(array.slice(midIdx));
   
	return merge(sortedLeft, sortedRight);
}
function merge(left, right){
	const merged = [];
	while(left.length !== 0 && right.length !== 0){
		if(left[0] < right[0]){
			merged.push(left.shift());
		}else{
			merged.push(right.shift());
		}
	}
	return merged.concat(left).concat(right);
}
// console.log(merge([2,5],[1,4,8]));
console.log(mergeSort([8,3,1,5,7,0,5]));
console.log(mergeSort([1,2]));
