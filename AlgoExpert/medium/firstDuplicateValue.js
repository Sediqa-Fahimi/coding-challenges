//O(n) time || O(1) space
function firstDuplicateValue(array) {
  
	for(const value of array){
		const absValue = Math.abs(value);
		if(array[absValue - 1] < 0) return absValue;
		array[absValue - 1] *= -1;
	}
	return -1;
}

// O(n) time || O(n) space 

function firstDuplicateValue(array) {
  const values = {};
	for(let i = 0 ; i < array.length ; i++){
		if(values[array[i]]){
			return array[i];
		}
		values[array[i]] = array[i];
	}
	return -1;
}