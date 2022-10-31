//O(nlogn) time || O(1) space 
function nonConstructibleChange(coins) {
	coins.sort((a,b)=> a-b);
	let sum = 0;
	for(const coin of coins){
		if(coin > sum + 1) return sum + 1;
		sum += coin;
	}
  return sum + 1;
}