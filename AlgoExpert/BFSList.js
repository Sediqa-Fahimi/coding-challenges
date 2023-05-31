function breadthFirstValues(root){ // O(N) time | O(N) space
	if(!root) return [];
	const queue = [root];
	const result = [];
	let currentNode;
	while(queue.length){
		currentNode = queue.shift();
		result.push(currentNode.val);
		if(currentNode.left) queue.push(currentNode.left);
		if(currentNode.right) queue.push(currentNode.right);
	}
	return result;
}
