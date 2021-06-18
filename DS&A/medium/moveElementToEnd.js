//O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
  let left = 0;
	let right = array.length - 1;
	while(left < right){
		while(left < right && array[right] === toMove) right--;
		if(array[left] === toMove) swap(left, right, array);
		left++;
	}
	return array;
}
function swap(i, j, array){
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}