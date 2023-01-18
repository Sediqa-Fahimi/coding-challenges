
class Node{
    constructor(val){
        this.val = val
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
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){ // O(N) time | O(1) space
        if(!this.head) return undefined;
        let node = this.tail;
        let prev = null;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let current = this.head;
            while(current.next){
                prev = current;
                current = current.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.length--;
        return node;
    }
    get(index){ // O(N) time | O(1) space
        if(!this.head) return null;
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.head;
        if(index === this.length - 1) return this.tail;
        let node = this.head;
        let i = 0;
        while( i < index){
            node = node.next;
            i++;
        }
        return node;
    }
    set(index, value){ // O(N) time | O(1) space
        if(!this.head) return false;
        if(index < 0 || index >= this.length) return false;
        let node = this.get(index);
        node.val = value;
        return true;
    }
    insert(index, val){ // O(N) time | O(1)space
        if(index < 0 || index > this.length) return false;
        if(index === this.length) !!this.push(val);
        let newNode = new Node(val);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let node = this.get(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length++;
        return true;
    }
    rotate(n){
        let index;
        if(n < 0){
            index = Math.abs(n) % this.length;
            let i = 0;
            while(i < index){
                this.insert(0, this.remove(this.length - 1).val);
                i++;
            }
        }
        if(n >= 0){
            index = n % this.length;
            let i = 0;
            while(i < index){
                this.push(this.remove(0).val);
                i++;
            }
        }
        return this;
    }
}

