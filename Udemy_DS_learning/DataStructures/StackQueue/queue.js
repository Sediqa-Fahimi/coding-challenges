
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Adding to the end of SLL(push). O(1) time 
    enqueue(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // Removing from the beginning of SLL(shift). O(1) time
    dequeue(){
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

let queue = new Queue();

console.log(queue.enqueue(123));
console.log(queue.enqueue(12));
console.log(queue.enqueue(1));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());