//O(n) time | O(d) space , where d is the greatest depth of subArrays.
function productSum(array, level = 1) {
	let sum = 0;
	for(const val of array){
		if(Array.isArray(val)){
			sum += productSum(val, level + 1);
		}else{
			sum += val;
		}
	}
    
	return sum * level;
}
