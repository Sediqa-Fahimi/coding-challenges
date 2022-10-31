//O(nlogn) time | O(1) space - where n is the number of queries.

function minimumWaitingTime(queries) {
  queries.sort((a,b) => a-b);
	let totalMinTime = 0;
	for(let i = 0; i < queries.length; i++){
		const time = queries[i];
		const queriesLeft = queries.length - (i + 1);
		totalMinTime += time * queriesLeft;
	}
	return totalMinTime;
}