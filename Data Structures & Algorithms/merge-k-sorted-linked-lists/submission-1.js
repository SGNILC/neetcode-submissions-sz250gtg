/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
 * Time Complexity: O(n log * k): where n is the total number of nodes and k is the number of lists
 * Space Complexity: O(log k): recursion stack uses auxiliary stack space
*/
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        
        // base cases: if the list is empty or less than 1, return null or that value-node
        if (lists.length === 0) {return null}
        if (lists.length === 1) { return lists[0]};
        
        // finds the mid-point in the list
        let midPointer = Math.floor(lists.length / 2); 

        // uses the slice method to reutn the left and right halves of the list
        // uses recursion to sort each hald of the lists 'this.mergeKList(...)'
        const leftList = this.mergeKLists(lists.slice(0, midPointer));
        const rightList = this.mergeKLists(lists.slice(midPointer));
        
        // return the subarrays
        return this.merge(leftList, rightList);

    }

    /**
     *  @Param {leftList} the left subarray of the list
     *  @Param {rightList} the right subarray of the list
     */
    merge(leftList, rightList){
        let leftPointer = leftList; // ? the left node
        let rightPointer = rightList; // the right side node
        let dummyNode = new ListNode(0) // a dummy node to store the values
        let pointerK = dummyNode; // node to track added elements in Node
        
        // Performs comparisons and adds nodes to the dummy node list of depending on order of magnitude (greater than)
        while (leftPointer !== null && rightPointer !== null){
            if (leftPointer.val <= rightPointer.val){
                pointerK.next = leftPointer;
                leftPointer = leftPointer.next;
            }
            else {
                pointerK.next = rightPointer;
                rightPointer = rightPointer.next; 
            }
            pointerK = pointerK.next; 
        }

        // Appends the remaining nodes to the dummy node
        if (rightPointer !== null){
            pointerK.next = rightPointer;            
        }
        else {
            pointerK.next = leftPointer;
        }

        return dummyNode.next; // returns the head node
    }
}
