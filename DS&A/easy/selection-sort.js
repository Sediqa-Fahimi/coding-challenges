//O(n^2) time | O(1) space 
function selectionSortt(array) {
	
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

//O(n2) time
//O(1) space

function selectionSort(array) {
  for(let i = 0; i < array.length - 1; i++){
		let smallestNumIdx = i;
		for(let j = i + 1; j < array.length; j++){
			if(array[j] < array[smallestNumIdx]) smallestNumIdx = j;
		}
		swap(i, smallestNumIdx, array);
	}
	return array;
}

function swap(i,j,array){
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

console.log(selectionSortt([4,5,1,9,0,22,3,2]));
console.log(selectionSort([4,5,1,9,0,22,3,2]));