// O(N) time | O(N) space

function rightSideView(root){
    if(!root) return [];
    let rightView = [];
    let current = root;
    while(current){
        rightView.push(current.val);
        current = current.right;
    }
    return rightView;
}