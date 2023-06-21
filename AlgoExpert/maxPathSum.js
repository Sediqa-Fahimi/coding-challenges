function maxPathSum(root){ // O(N) time | O(N) space
		if(!root.left && !root.right){
			return root.val;
		}
		if(!root) return -Infinity;
		return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));	
}
