class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * Performs binary search on a Matrix
     * Time Complexity: O(log n * m) where n is size of the array, m is the number of columns
     * Space Complexity: O(1) an in-place algorithm
     */
    searchMatrix(matrix, target) {

        // Edge Case: if matrix is empty
        if (!matrix.length || !matrix[0].length ) return false;

        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = rows * cols - 1;

        while (left <= right){
            let midPoint = Math.floor((left + right) / 2);
            let row = Math.floor(midPoint/cols);
            let col = midPoint % cols;
            let midValue = matrix[row][col];

            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = midPoint + 1;
            } else {
                right = midPoint - 1;
            }
        }
        // for (let row of matrix){ // O(n * m * log n)
        //     if(this.binarySearch(row, target)) 
        //         return true
        // }

        return false
    }
    /**
     * Helper Function for performing binary earch on the subarrays
     * 
     * @param {number[]} subArray is an array from the matrix
     * @param {int} target the original target to find
     * 
     * returns {boolean} 'true' if target is present, 'false' if otherwise 
     */

    binarySearch(subArray, target){

        let leftPointer = 0;                    // the left-most index of the subarray
        let rightPointer = subArray.length-1;   // the right-most index of the subarray

        
        while (leftPointer <= rightPointer){
            let midPoint = Math.floor((rightPointer + leftPointer)/2)

            if (target > subArray[midPoint]){
                leftPointer = midPoint + 1;
            }
           else if (target < subArray[midPoint]){
                rightPointer = midPoint - 1;
            }
            else {
                return true
            }
        }
        return false;
    }

}
