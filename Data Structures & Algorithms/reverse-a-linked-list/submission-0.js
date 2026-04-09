
  //Definition for singly-linked list.
//   class ListNode {
//       constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//   }
 
  

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    // arr - to store the list
    reverseList(head) {

        if (head == null){
            return null
        }

        let prev = null
        let curr = head

        while (curr != null){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        return prev;

    }
}
