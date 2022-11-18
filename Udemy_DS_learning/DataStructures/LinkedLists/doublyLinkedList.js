
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
    shift(){ // O(1) time | O(1) space
        if(!this.head) return undefined;
        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
    unshift(val){ // O(1) time | O(1) space
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.shift());

console.log(list.unshift(0));
console.log(list.unshift(-1));



