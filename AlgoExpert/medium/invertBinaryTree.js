//O(n) time || O(d) space , n is the number of nodes, d is the depth(height) of the binary tree.
function invertBinaryTree(tree) {
	if(tree === null) return;
	
	swapLeftAndRight(tree);
	invertBinaryTree(tree.left);
	invertBinaryTree(tree.right);
	
}

function swapLeftAndRight(tree){
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time || O(n) space 
function invertBinaryTree(tree) {
  const queue = [tree];
	while(queue.length){
		const node = queue.shift();
		if(node === null) continue;
		swapLeftAndRight(node);
		queue.push(node.left);
		queue.push(node.right);
	}
}

function swapLeftAndRight(tree){
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
