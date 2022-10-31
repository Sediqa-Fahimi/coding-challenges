
//O(n) time | O(1) space
// var maxProfit = function(prices) {
//     let minIdx = 0;
//     let i = 1;
//     while(i < prices.length){
//         if(prices[i] < prices[minIdx]) minIdx = i;
//         i++;
//     }
    
//     if(minIdx === prices.length - 1) return 0;
    
//     let maxIdx = minIdx;
//     let j = minIdx + 1;
//     while(j < prices.length){
//         if(prices[j] > prices[maxIdx]) maxIdx = j;
//         j++;
//     }
//     return prices[maxIdx] - prices[minIdx];
// };

//O(n2) time | O(1) space
// var maxProfit = function(prices){
//     let maxProfit = 0;
//     for(let i = 0; i < prices.length - 1 ; i++){
//         for( let j = i+1 ; j < prices.length ; j++){
//             if(prices[j] - prices[i] > maxProfit) maxProfit = prices[j] - prices[i];
//         }
//     }
//     return maxProfit;
// }

// O(n) time | O(1) space
var maxProfit = function(prices) {

    let min = Infinity;

    let maxProfit = 0;

    for(let i = 0 ; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }else if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
    }
    
    return maxProfit;

};