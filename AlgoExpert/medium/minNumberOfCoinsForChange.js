// O(nd) time | O(n) space
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n+1).fill(Infinity);
	numOfCoins[0] = 0;
	
	for(const coin of denoms){
		for(let amount = 0; amount < numOfCoins.length; amount++){
			if(coin <= amount){
				numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - coin] + 1);
			}
		}
	}
	return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}