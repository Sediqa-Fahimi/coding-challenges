
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
    get(index){ // O(N) time | O(1) space
        if(index < 0 || index >= this.length) return null;
        if(!this.head) return null;
        if(index === 0) return this.head;
        if(index === this.length - 1) return this.tail;
        let midIdx = Math.floor(this.length / 2);
        let node, counter;
        if(index <= midIdx){
            node = this.head;
            counter = 0;
            while(counter < index){
                node = node.next;
                counter++;
            }
        }else{
            node = this.tail;
            counter = this.length - 1;
            while(counter > index){
                node = node.prev;
                counter--;
            }
        }
        return node;
    }
    set(value, index){ //O(N) time | O(1) space
        if(index < 0 || index >= this.length) return false;
        if(!this.head) return false;
        let node = this.get(index);
        node.val = value;
        return true;
    }
    insert(val, index){ //
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let node = prev.next;
        newNode.next = node;
        node.prev = newNode;
        newNode.prev = prev;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index){ //
        if(index < 0 || index >= this.length) return null;
        if(!this.head) return null;

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



