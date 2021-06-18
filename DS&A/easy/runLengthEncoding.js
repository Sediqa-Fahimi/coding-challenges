//O(n) time | O(n) space
function runLengthEncoding(string) {
  const encoded = [];
	
	let i = 1;
	let count = 1;
	while(i < string.length){
	
		if(string[i] !== string[i-1] || count === 9){
			encoded.push(count.toString());
			encoded.push(string[i-1]);
			count = 0;
			
		}
		count ++;
		i++;
	}
	//to handle the last number of chars.
	encoded.push(count.toString());
	encoded.push(string[string.length - 1]);
	
	return encoded.join("");
}