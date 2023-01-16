
// Naive Recuresive Approach
// O(2^N) time (exponential) 
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// DP Memoized
// O(N) time 
function fib(n, memo = [0,1,1]) {
    if(memo[n] !== undefined) return memo[n];
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// DP Tabulation (Buttom-Up Approach)
// O(N) time | O(N) space
function fib(n){
    const fibs = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibs[i] = fibs[i-1] + fibs[i-2];
    }
    return fibs[n];
}