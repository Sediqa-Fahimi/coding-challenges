// O(n) time | O(n) space
function sortedSquaredArray(array) {
  const squares = new Array(array.length).fill(0);
	let smallerIdx = 0;
	let biggerIdx = array.length -1;
	
	for(let i = array.length-1; i >= 0 ; i--){
		const smallerValue = array[smallerIdx];
		const biggerValue = array[biggerIdx];
		if(Math.abs(smallerValue) < Math.abs(biggerValue)){
			squares[i] = biggerValue * biggerValue;
			biggerIdx--;
		}else{
			squares[i] = smallerValue * smallerValue;
			smallerIdx++;
		}
	}
	
	return squares;
}

// (nlogn) time | O(n) space
function sortedSquaredArray(array) {
  const squares = new Array(array.length).fill(0);
	
	for(let i = 0; i< array.length; i++){
		const num = array[i];
		squares[i] = num * num;
	}
	return squares.sort((a,b) => a - b);
}