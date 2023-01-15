// SinglyLinkedListNode {
//     int data;
//     SinglyLinkedListNode next;
// }

//O(NlogN) time || O(1) space
function createLinkedList(head) {
    // Write your code here
    const dummyHead = new SinglyLinkedListNode();
    let newCurr = dummyHead;

    // while the old LL has a node
    while(head){
        let oldPrev = null; // keep track of prev in old LL
        let oldCurr = head; // current node (odd) in old LL
        head = head.next; // set new head node to be the next one

        //loop through old LL until reach end (oldCurr is always the odd node to add to new LL)
        while(oldCurr){
            // if there is a prev, update the old LL's prev.next to point to the oldCurr.next,(deletes a node in middle)
            if(oldPrev) oldPrev.next = oldCurr.next;

            //set new LL's curr.next to be oldCurr
            newCurr.next = oldCurr;
            // update newCurr pointer
            newCurr = newCurr.next;

            // update old LL's prev and curr to jump two nodes over
            oldPrev = oldCurr.next;
            oldCurr = oldPrev?.next;
        }
    }

    // return new LL 's head = dummy's next
    return dummyHead.next;
}