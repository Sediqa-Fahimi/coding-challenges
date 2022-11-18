const { timeStamp } = require("console");

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ // O(1) time | O(1) space
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){ // O(1) time | O(1) space
        if(!this.head) return undefined;
        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }
}

let list = new DoublyLinkedList();

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

console.log(list.pop());
console.log(list.pop());

