//O(n) time | O(1) space
function findThreeLargestNumbers(array) {
    let largest = null;
	let larger = null;
	let large = null;
	for(const el of array){
		if(largest === null || el > largest){
			large = larger;
			larger = largest;
			largest = el;
		}else if(larger === null || el > larger){
			large = larger;
			larger = el;
		}else if(large === null || el > large){
			large = el;
		}
	}
	return [large,larger,largest];
}