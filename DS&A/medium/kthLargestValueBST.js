//O(n) time || O(n) space
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const inOrderValues = inOrderTraverse(tree, []);
	return inOrderValues[inOrderValues.length - k];
}

function inOrderTraverse(tree, array){
	if(!tree) return array;
	
	inOrderTraverse(tree.left, array);
	array.push(tree.value);
	inOrderTraverse(tree.right, array);
	return array;
}

//O(h + k) time || O(h) space
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo{
	constructor(numNodesVisited, latestVisitedNodeValue){
		this.numNodesVisited = numNodesVisited;
		this.latestVisitedNodeValue = latestVisitedNodeValue;
	}
}

function findKthLargestValueInBst(tree, k) {
	const treeInfo = new TreeInfo(0, -1);
	ReverseInOrderTraverse(tree, k, treeInfo);
	return treeInfo.latestVisitedNodeValue;
}

function ReverseInOrderTraverse(node, k, treeInfo){
	if(!node || treeInfo.numNodesVisited >= k) return;
	
	ReverseInOrderTraverse(node.right, k, treeInfo);
	if(treeInfo.numNodesVisited < k){
		treeInfo.numNodesVisited++;
		treeInfo.latestVisitedNodeValue = node.value;
		ReverseInOrderTraverse(node.left, k, treeInfo);
	}
}