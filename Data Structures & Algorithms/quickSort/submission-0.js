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
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length-1);

        return pairs
    }

    quickSortHelper(pairs, start, end){

          // base case: if array is empty or less 1 than one, return arr
        if (start >= end) {return pairs};
      
        // Get the Start and end of arr
        let arrayStart = start;
        const pivot = pairs[end];
        let leftValTracker = start;

        // Performs partitionaing: all values less than pivot will go to the left
        for (let i = arrayStart; i < pairs.length; i++){
            if (pairs[i].key < pivot.key){
                let temporaryVal = pairs[leftValTracker];
                pairs[leftValTracker] = pairs[i];
                pairs[i] = temporaryVal;
                leftValTracker++;
            }
        }

        // Place pivot in the middle
        pairs[end] = pairs[leftValTracker];
        pairs[leftValTracker] = pivot;

        // Perform recursion on the left and right halves
        this.quickSortHelper(pairs, arrayStart, leftValTracker-1);
        this.quickSortHelper(pairs, leftValTracker+1, end);
    }
}
