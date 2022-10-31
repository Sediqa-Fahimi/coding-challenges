class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time || O(h) space, h is the height of the tree.
function heightBalancedBinaryTree(tree) {
	return getTreeInfo(tree).isBalanced;
}

function getTreeInfo(tree){
	if(tree === null){
		return new TreeInfo(true, -1);
	}
	
	const leftTreeInfo = getTreeInfo(tree.left);
	const rightTreeInfo = getTreeInfo(tree.right);
	
	const isBalanced = 
		leftTreeInfo.isBalanced && 
		rightTreeInfo.isBalanced &&
		Math.abs(leftTreeInfo.height - rightTreeInfo.height) <= 1;
	
	const height = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
	return new TreeInfo(isBalanced, height);
}

class TreeInfo {
	constructor(isBalanced, height){
		this.isBalanced = isBalanced;
		this.height = height;
	}
}
