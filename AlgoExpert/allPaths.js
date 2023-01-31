// O(N) time | O(N * D) space , N: number of nodes, D: Depth of the tree
function allPaths(root){
    if(!root) return null;
    const paths = [];

    function dfs(node, path = []){ 
        if(!node.left && !node.right){
            path.push(node.val);
            paths.push(path);
            return;
        }
        path.push(node.val);
        if(node.left) dfs(node.left, [...path]);
        if(node.right) dfs(node.right, [...path]);
    }
    dfs(root);
    return paths;
}

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root) { 
            this.root = node;
        }else{
            const queue = [this.root];
            while(queue.length){
                let current = queue.shift();
                if(!current.left){
                    current.left = node;
                    break;
                }
                if(!current.right){
                    current.right = node;
                    break;
                }
                queue.push(current.left);
                queue.push(current.right);
            }
        }
        return this;
    }
}

const btree = new binaryTree();

btree.insert("A");
btree.insert("B");
btree.insert("C");
btree.insert("D");
btree.insert("E");
btree.insert("F");

/*
         A
       /  \ 
      B    C
     / \  /
    D  E  F

*/

console.log(allPaths(btree.root)); // [ [ 'A', 'B', 'D' ], [ 'A', 'B', 'E' ], [ 'A', 'C', 'F' ] ]

const allTreePaths = (root) => {
    if (root === null) return [ ];

    if (root.left === null && root.right === null) return [ [root.val] ]

    const paths = [];

    const leftSubPaths = allTreePaths(root.left);
    for (let subPath of leftSubPaths) {
    paths.push([ root.val, ...subPath ]);
    }

    const rightSubPaths = allTreePaths(root.right);
    for (let subPath of rightSubPaths) {
    paths.push([ root.val, ...subPath ]);
    }

    return paths;
};