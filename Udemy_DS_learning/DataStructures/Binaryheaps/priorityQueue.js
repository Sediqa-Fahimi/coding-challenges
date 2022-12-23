class Node{
    constructor(val, priorty){
        this.value = val;
        this.priority = priorty;
    }
}

// O(Log N) time (Insertion & Deletion)| O(N) space - N: # of Nodes
class PriorityQueue{ // This Priority Queue is implemented using Min Binary Heap.
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let parentIdx = 0;
        const length = this.values.length; 
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swapIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority < element.priority) ||
                    (swapIdx !== null && rightChild.priority < leftChild.priority)
                ){
                    swapIdx = rightChildIdx;
                }
            }
            if(swapIdx === null) break;
            this.values[parentIdx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            parentIdx = swapIdx;
        }
    }
}


