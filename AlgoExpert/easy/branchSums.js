class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  return branchSumsHelper(root, root.value, []);
}
function branchSumsHelper(node, sum, sumArr){
	if(!node.left && !node.right){
		sumArr.push(sum);
	}
	if(node.left){
		sumArr = branchSumsHelper(node.left, sum + node.left.value, sumArr);
	}
	if(node.right){
		sumArr = branchSumsHelper(node.right, sum + node.right.value, sumArr);
	}
	return sumArr;
}