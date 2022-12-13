class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element <= parent) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element){
                    swapIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild > element) ||
                    (swapIdx !== null && rightChild > leftChild)
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



