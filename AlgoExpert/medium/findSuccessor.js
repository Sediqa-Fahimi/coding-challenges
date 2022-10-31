class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(n) time || O(n) space
function findSuccessor(tree, node) {
  const inOrderTraversedArray = inOrderTraverse(tree, []);
	
	for(let i = 0; i < inOrderTraversedArray.length; i++){
		const currentNode = inOrderTraversedArray[i];
		if(currentNode !== node) continue;
		
		if(i === inOrderTraversedArray.length - 1) return null;
		
		return inOrderTraversedArray[i+1];
	}
}

function inOrderTraverse(tree, array){
	if(tree === null) return array;
	
	inOrderTraverse(tree.left, array);
	array.push(tree);
	inOrderTraverse(tree.right, array);
	return array;
}
/////////////////////////////////////////////

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(n) time || O(n) space
function findSuccessor(tree, node) {
  const treeInfo = new TreeInfo(0, null);
	inOrderTraverse(tree, node, treeInfo);
	return treeInfo.successor;
}
function inOrderTraverse(tree, node, treeInfo){
	if(tree === null) return ;
	
	inOrderTraverse(tree.left, node, treeInfo);
	if(treeInfo.previouslyVisited === node.value){
		treeInfo.successor = tree;
		treeInfo.previouslyVisited = tree.value;
	}else if(treeInfo.successor === null){
		treeInfo.previouslyVisited = tree.value;
		inOrderTraverse(tree.right, node, treeInfo);
	}
}
class TreeInfo {
	constructor(previouslyVisited, successor){
		this.previouslyVisited = previouslyVisited;
		this.successor = successor;
	}
}
/////////////////////////////////////
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(h) time || O(1) space, h is the height of the tree.
function findSuccessor(tree, node) {
  if(node.right) return getLeftMostNode(node.right);
	
	return getRightMostParent(node);
}
function getLeftMostNode(node){
	let currentNode = node;
	while(currentNode.left){
		currentNode = currentNode.left;
	}
	return currentNode;
}
function getRightMostParent(node){
	let currentNode = node;
	while(currentNode.parent && currentNode === currentNode.parent.right){
		currentNode = currentNode.parent;
	}
	return currentNode.parent;
}
