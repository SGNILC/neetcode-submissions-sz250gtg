/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }

/**
 * Time Complexity: O(n log n) -- arrays are broken down into halves and sorted
 * Space Complexity: O(n) -- a new array is returned 
 */
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        // [(5, "apple"), (2, "banana"), (9, "cherry")]
 

        // base case: if LP is greater than RP --> return array
        if (pairs.length <=1 ) return pairs;

        // find the mid-point
        let midPointer = Math.floor((0 + pairs.length) / 2);

        // breaks down the pairs by half
        const leftSide = this.mergeSort(pairs.slice(0, midPointer));
        const rightSide = this.mergeSort(pairs.slice(midPointer));
        
        // merges both halves
        let newArr = this.merge(leftSide, rightSide);

        return newArr;
    }

    /**
     *  @Param {leftSide} a subarray of left-halve's values
     *  @Param {rightSide} a subarray of right-halve's values
     * 
     *  sorts and merges the half-subarrays of an array
     */


    merge(leftSide, rightSide){

        // copies the left and right arrays
        let newArr = new Array(leftSide.length + rightSide.length); // the new array to be returned
        let leftArr = [...leftSide.slice(0)]; // left subarray
        let rightArr =[...rightSide.slice(0)]; // right subarray

        let pointerI = 0; // pointer for the left subarray
        let pointerJ = 0; // pointer for the right subarray
        let pointerK = 0; // pointer for the new array to be returned

        // iterates through both arrays while pointers are not out of bounds
        while (pointerI < leftArr.length && pointerJ < rightArr.length){
            // ensures stability between two equal keys
            if (leftArr[pointerI].key <= rightArr[pointerJ].key){
            newArr[pointerK] = leftArr[pointerI];
            pointerI += 1;
            }
            else {
                newArr[pointerK] = rightArr[pointerJ];
                pointerJ += 1;
            }
            pointerK += 1
        }
        
        // inputs remaining pairs into the new array on the left side
        while(pointerI < leftArr.length){
            newArr[pointerK++] = leftArr[pointerI++];
        }

        // inputs remaining pairs into the new array on the left side
        while (pointerJ < rightArr.length){
            newArr[pointerK] = rightArr[pointerJ];
            pointerK++;
            pointerJ++
        }

        return newArr
    }


}
