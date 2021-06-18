//O(n^2) time | O(1) space 
function selectionSort(array) {
	
  for(let i = 0; i < array.length; i++){
		let smallest = array[i];
		let j = i+1;
		let idx = i;
		while(j < array.length){
			if(array[j] < smallest){
				smallest = array[j];
				idx = j;
			}
			j++;
		}
		const temp = array[i];
		array[i] = smallest;
		array[idx] = temp;
	}
	return array;
}