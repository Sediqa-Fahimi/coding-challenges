// O(nd) time | O(n) space , n is the target amount, d is the number of coins in the denoms array.
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n+1).fill(0);
	ways[0] = 1;
	for(let coin of denoms){
		for(let amount = 1; amount < n+1 ; amount++){
			if(coin <= amount){
				ways[amount] = ways[amount] + ways[amount - coin];
			}
		}
	}
	return ways[n];
}