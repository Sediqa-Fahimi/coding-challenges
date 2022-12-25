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


class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        //build up initail state
        for(let vertex in this.adjacencyList){
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            }else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().value;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let newDistance = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(newDistance < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = newDistance;
                        //updating prevoius - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, newDistance);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}



let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A","C", 3);
g.addEdge("A","F", 2);
g.addEdge("C","F", 2);
g.addEdge("C","D", 4);
g.addEdge("C","E", 1);
g.addEdge("F","E", 3);
g.addEdge("F","B", 6);
g.addEdge("F","G", 5);
g.addEdge("E","B", 2);
g.addEdge("D","B", 1);
g.addEdge("G","B", 2);

console.log(g.dijkstra("A", "B"));