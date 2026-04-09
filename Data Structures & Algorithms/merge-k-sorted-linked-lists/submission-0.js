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
 * Time Complexity: O(n log * k): we are performing, essentially, nexted merge-sort algorithms which splits the list in half and compared the values in each node recursively
 * Space Complexity: O(k): the dummy node list will be filled based on the amount of nodes that there are (k) 
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        
        // base cases: if the list is empty or less than 1, retuurn null or that value-node
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

        // adds remaining nodes on the left or right side to the dummy node list
        if (leftPointer !== null){
            pointerK.next = leftPointer;
            leftPointer = leftPointer.next;
            pointerK = pointerK.next;
            
        }
        if (rightPointer !== null){
            pointerK.next = rightPointer;
            rightPointer = rightPointer.next;
            pointerK = pointerK.next;
            
        }

        return dummyNode.next; // returns the head node
    }
}
