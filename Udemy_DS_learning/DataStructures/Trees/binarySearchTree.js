
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right =null;
    }
}

class BinarySearchTree{ // Insert: O(log n) - Searching: O(log n) , Worst case: O(N)
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while(current){
            if(node.value === current.value) return undefined;
            if(node.value > current.value){
                if(current.right){
                    current = current.right;
                }else{
                    current.right = node;
                    current = null;
                }
            }else{
                if(current.left){
                    current = current.left;
                }else{
                    current.left = node;
                    current = null;
                }
            }
        }
        return this;
    }
    find(value){
        if(!this.root) return false;
        let current = this.root;
        while(current){
            if(value === current.value){
                return current;
            }else if(value > current.value){
                current = current.right;
            }else{
                current = current.left;
            }
        }
        return false;
    }
}

let bst = new BinarySearchTree();
console.log(bst);

bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(9);
console.log(bst.insert(3));

console.log(bst.find(2));
console.log(bst.find(4));
console.log(bst.find(9));