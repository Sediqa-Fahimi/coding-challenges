//O(n) time | o(n) space - n is the total number of elements in the array
function spiralTraverse(array) {
	const results = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
	
	while(startRow <= endRow && startCol <= endCol){
		for(let col = startCol; col <= endCol; col++){
			results.push(array[startRow][col]);
		}
		
		for(let row = startRow + 1; row <= endRow; row++){
			results.push(array[row][endCol]);
		}
		
		for(let col = endCol-1 ; col >= startCol; col--){
			if(startRow === endRow) break;
			results.push(array[endRow][col]);
		}
		
		for(let row = endRow-1 ; row > startRow; row--){
			if(startCol === endCol) break;
			results.push(array[row][startCol]);
		}
		startRow++;
		endRow--;
		startCol++;
		endCol--;
	}
	return results;
}