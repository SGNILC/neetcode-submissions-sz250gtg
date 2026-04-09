class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a = 0;
        let b = 0;

        // for (let num in nums){
        //     a = nums[num]
        //     for (let num in nums)
        //     b = nums[num+1]
        //     if ( b != nums.length){
        //         if ((a+b) == target){
        //             return [a, b]
        //         }
        //     }
        // }

        for (let i = 0; i <= nums.length-1; i++){ // time complexity: O(n)
            a = nums[i]
            for (let j = 0;  j <= nums.length-1; j++){ // time complexity: O(n)
                b = nums[j]
                
                if ( (a + b) == target && (i != j)){ //time complexity O(n)
                    console.log(a, b, a+b)
                    return [i , j]
                }
                    

            }
        }

        // let search = 0

        for (let num of nums){
            search = target - num
            if (nums.indexOf(search) != -1 && nums.indexOf(search) != nums.indexOf(num)){
                console.log(num, search, target) 
                return [nums.indexOf(num), nums.indexOf(search)]
            } 
        }

        // return [0,0]
    }
}
