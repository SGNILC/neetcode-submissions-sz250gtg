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

        // for (let i = 0; i <= nums.length-1; i++){ // time complexity: O(n)
        //     a = nums[i]
        //     for (let j = 0;  j <= nums.length-1; j++){ // time complexity: O(n)
        //         b = nums[j]
                
        //         if ( (a + b) == target && (i != j)){ //time complexity O(n)
        //             console.log(a, b, a+b)
        //             return [i , j]
        //         }
                    

        //     }
        // }

        let map = new Map()
        let search = 0

        for (let i = 0; i < nums.length; i++){
            search = target - nums[i]

            if (map.has(search)){
                return [map.get(search), i]
            }
            else {
                map.set(nums[i], i)
            }
        }



        // for (let num of nums){
        //     search = target - num
        //     index = nums.indexOf(search)
        //     console.log(index)
        //     if (index != -1 && index != nums.indexOf(num)){
        //         console.log(num, search, target) 
        //         return [nums.indexOf(num), index]
        //     } 
        // }

        return [0,0]
    }
}
