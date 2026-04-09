class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let val = false
        for (let m of matrix){
            val = binarySearch(m, target)
            if (val)
                break
        }

        return val
    }

}

function binarySearch(row, target){
    let l = 0, r = row.length - 1
    
        while (l <= r){
            console.log(row)
            let mid = Math.floor((l + r) / 2)
            console.log(row[mid])

            if (target == row[mid]){
                console.log("this is running")
                return true
            }
            else if (row[mid] > target){
                r = mid - 1
            }
            else {
                l = mid + 1
            }
        }
        return false
    }