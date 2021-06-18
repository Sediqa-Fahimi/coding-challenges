// O(n) time || O(1) space
function findClosestValueInBst(tree, target) {
	let currentNode = tree;
	let closestVal = tree.value;
	while(currentNode){
		if(Math.abs(target - currentNode.value) < Math.abs(target - closestVal)){
			closestVal = currentNode.value;
		}
		if(target < currentNode.value){
			currentNode = currentNode.left;
		}else if(target > currentNode.value){
			currentNode = currentNode.right;
		}else{
			break;
		}
	}
	return closestVal;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}