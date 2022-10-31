//O(nlogn) time | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a,b)=> a-b);
	blueShirtSpeeds.sort((a,b)=> a-b);
	
	if(fastest) reverseArrayInPlace(blueShirtSpeeds);
	
	let sum = 0;
	for(let i = 0; i < redShirtSpeeds.length; i++){
		const rider1 = redShirtSpeeds[i];
		const rider2 = blueShirtSpeeds[i];
		sum += Math.max(rider1,rider2);
	}
	return sum;
}
function reverseArrayInPlace(array){
	let start = 0;
	let end = array.length - 1;
	while(start < end){
		const temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}