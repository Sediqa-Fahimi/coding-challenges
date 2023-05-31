
function sum_list(head){ // O(N) Time | O(1) space
	if(!head) return 0;
	let sum = 0;
	let current = head;
	while(current){
		sum += current.val;
		current = current.next;
	}
	return sum;
}
