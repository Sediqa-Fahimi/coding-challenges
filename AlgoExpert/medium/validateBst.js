//O(n) time || O(d) space , where n is the number of nodes and d is the depth(height) of the tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
	return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(node, minNum, maxNum){
	if(!node) return true;
	if(node.value < minNum || node.value >= maxNum) return false;
	const leftIsValid = validateBstHelper(node.left, minNum, node.value);
	return leftIsValid && validateBstHelper(node.right, node.value, maxNum);
}