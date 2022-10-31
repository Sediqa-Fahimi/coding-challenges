// Worst: O(n^2) time | O(1) space
// Best: O(n) time | O(1) space (when we recieve a sorted array).
function insertionSort(array) {
 	
	for(let i = 0; i < array.length-1; i++){
		const next = array[i+1];
		for(let j = i; j >= 0; j--){
			if(next < array[j]){
				const temp = array[j];
				array[j] = next;
				array[j+1] = temp;
			}
		}
	}
	return array;
}