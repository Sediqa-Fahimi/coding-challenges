// O(E) Time - E is the number of Edges. | O(E) Space
function hasPath(graph, src, dst){
	if(src === dst) return true;
	if(graph[src].length === 0) return false;
	
	for(let nbr of graph[src]){
		if(nbr === dst) return true;
		if(hasPath(graph, nbr, dst)) return true;
	}
	return false;
}
