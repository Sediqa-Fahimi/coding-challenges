//Average case: when the tree is balanced
// O(n) time || O(h) space , n is the number of nodes and h is the height of the binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}
function getTreeInfo(tree){
	if(tree === null){
		return new TreeInfo(0,0);
	}
	const leftTreeInfo = getTreeInfo(tree.left);
	const rightTreeInfo = getTreeInfo(tree.right);
	
	const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
	const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
	const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
	const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
	
	return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
	constructor(diameter, height){
		this.diameter = diameter;
		this.height = height;
	}
}