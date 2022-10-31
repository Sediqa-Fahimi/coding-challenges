//O(n^2) time || O(n) space , n is the length of the input array
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  if(preOrderTraversalValues.length === 0) return null;
	const currentValue = preOrderTraversalValues[0];
	let rightSubtreeRootIdx = preOrderTraversalValues.length;
	for(let idx = 1; idx < preOrderTraversalValues.length; idx++){
		if(preOrderTraversalValues[idx] >= currentValue){
			rightSubtreeRootIdx = idx;
			break;
		}
	}
	const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1,rightSubtreeRootIdx));
	const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
	
	return new BST(currentValue, leftSubtree, rightSubtree);
}


// O(n) time || O(n) space, n is the length of the input array.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class TreeInfo{
	constructor(rootIdx){
		this.rootIdx = rootIdx;
	}
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
	return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}
function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, treeInfo){
	if(treeInfo.rootIdx === preOrderTraversalValues.length) return;
	const currentValue = preOrderTraversalValues[treeInfo.rootIdx];
	if(currentValue < lowerBound || currentValue >= upperBound) return null;
	
	treeInfo.rootIdx++;
	const leftSubtree = reconstructBstFromRange(lowerBound, currentValue, preOrderTraversalValues, treeInfo);
	const rightSubtree = reconstructBstFromRange(currentValue, upperBound, preOrderTraversalValues, treeInfo);
	return new BST(currentValue, leftSubtree, rightSubtree);
}