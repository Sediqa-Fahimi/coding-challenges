function waysToClimb(n, memo = {}){
  if(n in memo) return memo[n];
  if(n === 1) return 1;
  if(n === 2) return 2;

  memo[n] = waysToClimb(n-1) + waysToClimb(n-2);
  return memo[n];
}