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
    shift(){  // O(1) time | O(1) space
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = removed.next;
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
    get(index){ // O(N) time | O(1) space
        if(index < 0 || index >= this.length) return null;
        if(!this.head) return null;
        let current = this.head;
        let counter = 0;
        while(counter < index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value){ // O(N) time | O(1) space
        targetNode = this.get(index);
        if(targetNode){
            targetNode.val = value;
            return true;
        }else{
            return false;
        }
    }
    insert(value, index){ // O(N) time | O(1) space
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let preNode = this.get(index - 1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index){ // O(N) time | O(1) space
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        removed.next = null;
        this.length--;
        return removed;
    }
}

let list = new SinglyLinkedList();
console.log(list.push("Hello"));
console.log(list.push("there"));
console.log(list.push("how"));
console.log(list.push("are"));
console.log(list.push("you"));

// console.log(list.pop());


// console.log(list.unshift("omg"));

// console.log(list.shift());

// console.log(list.get(0));
// console.log(list.get(1));

// console.log(list.insert('nice', -1));
console.log(list.insert('to', 0));
console.log(list.insert('meet', 6));
// console.log(list.insert('you', 12));
console.log(list.insert('hey', 2));

console.log(list.remove(0));
console.log(list.remove(6));
console.log(list.remove(2));
console.log(list.remove(12));

console.log(list);



