// O(nlogn) Time | O(1) Space
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b)=> a-b);
	blueShirtHeights.sort((a,b)=> a-b);
	
	const frontRowStudents = redShirtHeights[0] < blueShirtHeights[0] ? 'red' : 'blue';
  
	for(let i = 0; i < redShirtHeights.length; i++){
		const redShirtHeight = redShirtHeights[i];
		const blueShirtHeight = blueShirtHeights[i];
		
		if(frontRowStudents === 'red'){
			if(redShirtHeight >= blueShirtHeight) return false;
		}else if(blueShirtHeight >= redShirtHeight) return false;
		
	}
	
  return true;
}