/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//O(log n) time | O(1) space
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n-1;
        
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            if(!isBadVersion(mid+1)){
                start = mid + 1;
            }else if(!isBadVersion(mid)){
                return mid+1;
            }else{
                end = mid - 1;
            }
        }
        
    };
};