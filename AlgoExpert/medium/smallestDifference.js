//O(nlogn) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a-b);
  arrayTwo.sort((a,b) => a-b);
	
	let idx1 = 0;
	let idx2 = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	
	while(idx1 < arrayOne.length && idx2 < arrayTwo.length){
		let firstNum = arrayOne[idx1]; 
		let secondNum = arrayTwo[idx2];
		if(firstNum < secondNum){
			current = secondNum - firstNum;
			idx1++;
		} else if(firstNum > secondNum){
			current = firstNum - secondNum;
			idx2++;
		} else{
			return [firstNum, secondNum];
		}
		if(current < smallest){
			smallest = current;
			smallestPair = [firstNum, secondNum];
		}
	}
	return smallestPair;
}