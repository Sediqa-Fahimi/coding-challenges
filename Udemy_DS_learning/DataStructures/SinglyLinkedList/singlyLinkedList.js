class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){ // O(1) time | O(1) space
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){  // O(N) time | O(1) space , N: length of Linked List
        if(this.length === 0) return undefined;
        let current  = this.head;
        let pre = null;
        while(current.next){
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        if(this.tail) {
            this.tail.next = null;
        }else{
            this.head = null;
        }
        this.length--;  
        return current;
    }
    shift(){ 
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        if(this.length === 1) this.tail = null;
        removed.next = null;
        this.length--;
        return removed;
    }
    unshift(value){ // O(1) time | O(1) space
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list.push("Hello"));
console.log(list.push("there"));
console.log(list.push("how"));
console.log(list.push("are"));
console.log(list.push("you"));

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

console.log(list.unshift("omg"));

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());

