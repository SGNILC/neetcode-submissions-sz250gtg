class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        

        // O(n) solution - trivial b/c its one line + performs task at a very higih level
        // return Math.min(...nums) 

        //** This is the binary search. Begin by defining all required vars: r, l pointers, and res. 
        // use while loop to keep condition running until it either (1) r < l or (2) hits break point
        // (1) Find midpoint --> (2) compute the min amount --> (3) check if it is part of the "left" or "right" sorted portions of rotated array
        // (5) continue searching on lef or right side based on condition from step 4...
        // if we reach a special subarray of just 2 cvals, use Math.min to return min, which would execute in 0(1) time.
        let r = nums.length-1
        let l = 0
        let res = nums[l];
        while (l <= r){
            if (nums[l] < nums[r]) {
                res = Math.min(res, nums[l])
                break
            }


            let m = Math.ceil((l + r) / 2)
            res = Math.min(res, nums[m])

            console.log(res)
            if (nums[m] >= nums[l]){
                l = m + 1
            }
            else{
               r = m - 1
            }
        }
        return res
    }
}







