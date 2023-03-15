function findPaths(root){
  // if root doesnt exists
    // return []
  if(!root) return [];

  // paths array
  const paths = [];

  // dfs helper
  function dfs(node, path = []){
    // base case, if node is leaf
      // add leaf node to the current path
      // push the current path to paths
      //return
    if(!node.left && !node.right){
      path.push(node.value);
      paths.push([...path]);
      path.pop();
      return;
    }
    // add the node to the path
    path.push(node.value);

    // dfs left child
    if(node.left) dfs(node.left, path);

    // dfs right child
    if(node.right) dfs(node.right, path);
    path.pop()
  }

  // dfs helper(root)
  dfs(root);

  // return paths
  return paths;
}
