/**
 * Time Complexity: O(n) as we iterate throughthe nums array 
 * Space Complexity: O(m) as we created a count array for frequency mapping
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        // Creates sount Array
        const colorsCount = new Array(3).fill(0);

        // Account for frequency of nums array's values
        for (let i = 0; i < nums.length; i++){
            colorsCount[nums[i]] += 1;
        }

        // Iterate and overwrite the original array's values in a sorted manner
        let originalIndex = 0;
        for (let index = 0; index < colorsCount.length; index++){
            for (let frequency = 0; frequency < colorsCount[index]; frequency++){
                nums[originalIndex] = index; 
                originalIndex++
            }
        }
    }
}

// Test Cases
// nums: [1,0,1,2]
// count: [ 1, 2, 1 ]
// [0, 0, 2]
