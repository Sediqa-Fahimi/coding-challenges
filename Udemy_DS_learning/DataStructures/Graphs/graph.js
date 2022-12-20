/* 

|V| number of vertices
|E| number of Edges

Operation   |   Adjacency List    |     Adjacency Matrix
----------------------------------------------------------
Add Vertex          O(1)                        O(|V^2|)
Add Edge            O(1)                        O(1)
Remove Vertex       O(|V| + |E|)                O(|V^2|)
Remove Edge         O(|E|)                      O(1)
Query               O(|V| + |E|)                O(1)
Storage             O(|V| + |E|)                O(|V^2|)

*/
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(ele => ele !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(ele => ele !== v1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    dfsRecursive(start){
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);
            adjacencyList[vertex].forEach( neighbor => {
                if(!visited[neighbor]) return dfs(neighbor);
            });
        })(start);
        return results;
    }
    dfsIterative(start){
        const results = [];
        const visited = {};
        let stack = [start];
        
        visited[start] = true;
        let currentVertex;

        while(stack.length){
            currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach( neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })

        }
        return results;
    }
    bfsGraph(start){
        const results = [];
        const visited = {};
        let queue = [start];
        
        visited[start] = true;
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach( neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })

        }
        return results;
    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E"); 
g.addEdge("D","F");
g.addEdge("E","F");


console.log(g.dfsRecursive("A"));

console.log(g.dfsIterative("A"));

console.log(g.bfsGraph("A"));