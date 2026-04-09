class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for (let row of matrix){
            if(this.binarySearch(row, target)) 
                return true
        }

        return false
    }

    binarySearch(subArray, target){

        let leftPointer = 0;
        let rightPointer = subArray.length-1;

        
        while (leftPointer <= rightPointer){
            let midPoint = Math.floor((rightPointer + leftPointer)/2)

            if (target > subArray[midPoint]){
                leftPointer = midPoint + 1;
            }
           else if (target < subArray[midPoint]){
                rightPointer = midPoint - 1;
            }
            else {
                console.log(subArray[midPoint])
                return true
            }
        }
        return 0;
    }

}
