
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
        
        // If the list is empty, return null
        if (head == null){
            return null
        }

        // Initiates pointers; prev stars 'null' and curr starts at first node
        let prev = null
        let curr = head

        /** 
         * Iterative approach: mvoe through the linked listed while the end is not yet reached;
         * reassign the pointers such that the links are reversed and node poitns to the former node
         * 
         * Time Complexity: O(n) b/c process is dependent on how many nodes there are in linked list
         * Space Complexity: O(1) b/c variable / pointers are used
         */

        // O(n) + O(1)
        // while (curr != null){
        //     let next = curr.next // O(n)
        //     curr.next = prev // O(1)
        //     prev = curr // O(1)
        //     curr = next // O(1)
        // }

        // return prev; //O(1)

        //** Recursive Apporach */
        /** Break the problem into sub-problems. While 'head.next' != null, 
         * Keep breaking down the list
         * reverse it from the end, going 'back up'
         */

        // Base case: if head is null, return null
        if (head == null){
            return null
        }

        let newHead = head
        if (head.next != null){
            newHead = this.reverseList(head.next)
            head.next.next = head
        }
        head.next = null

        return newHead

    }
}
