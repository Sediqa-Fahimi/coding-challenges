//O(n) time | O(k) space - where n is the # of competitions and k is the # of teams.
function tournamentWinner(competitions, results) {
  const myHash = {};
	for(let i = 0; i < competitions.length; i++){
		if(results[i] === 1){
			myHash[competitions[i][0]] ? myHash[competitions[i][0]] += 3 : myHash[competitions[i][0]] = 3;
			
		}else{
			myHash[competitions[i][1]] ? myHash[competitions[i][1]] += 3 : myHash[competitions[i][1]] = 3;
		}
	}
	let max = 0;
	let maxKey = '';
	for(let key in myHash){
		if(myHash[key] > max){
			max = myHash[key];
			maxKey = key;
		}
	}
  return maxKey;
}