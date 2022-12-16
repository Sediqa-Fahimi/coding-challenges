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
}

// let g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Berlin');
// g.addEdge('Tokyo','Berlin');
// console.log(g);
// g.removeVertex('Tokyo');
// console.log(g);
