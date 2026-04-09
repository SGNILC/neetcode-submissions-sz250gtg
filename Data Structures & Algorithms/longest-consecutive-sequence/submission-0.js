class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // let count = 0;
        // console.log(nums.sort(function(a, b){return a - b}))
        // for (let j = 0; j < nums.length-1; j++){
        //         if (Math.abs(nums[j] - nums[j+1]) == 1){
        //             count++;
        //             //console.log(count)
        //             nums.splice(j,1)
        //             console.log(nums)
        //         }
        //         if (nums[j] == nums[j+1]){
        //             console.log(nums[j])
        //             console.log(nums[j+1])
        //             nums.splice(j,1)
        //             console.log(nums)
        //         }
        // }
                
        // return count;
    
        let vals = new Set(nums)
        let longestSew = 0

        for (let i of vals){
            if (!(vals.has(i - 1))){
                let length = 0
                while (vals.has(i+length)){
                    length++
                }
                longestSew = Math.max(longestSew, length)
            }
        }

        return longestSew
        
    }
}
