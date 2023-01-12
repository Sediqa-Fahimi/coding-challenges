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

//O(n) time | O(k) space - k: # of teams, n: # of competitions
function tournamentWinner(competitions, results) {
	let bestTeam = '';
	const scores = {[bestTeam]: 0};

	for(let i = 0; i < competitions.length; i++){
		let result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === 1 ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);

		if(scores[winningTeam] > scores[bestTeam]){
			bestTeam = winningTeam;
		}
	}
	return bestTeam;
}

function updateScores(team, score, scores){
	if(!(team in scores)) scores[team] = 0;
	scores[team] += score;
}