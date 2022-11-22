
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Adding to the beginning of the SLL. O(1) time
    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    // Removing from the beginning of the SLL to acheive O(1) time.
    pop(){
        if(!this.first) return null;
        let removed = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }
        removed.next = null;
        return removed.value;
    }
}

let stack = new Stack();
console.log(stack.push(123));
console.log(stack.push(23));
console.log(stack.push(3));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());