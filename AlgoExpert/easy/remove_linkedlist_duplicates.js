// O(n) time | O(1) space
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  const head = linkedList;
	
	while(linkedList.next){
		if(linkedList.next.value !== linkedList.value){
			linkedList = linkedList.next;
		}else{
			linkedList.next = linkedList.next.next;
		}
	}
	return head;
}