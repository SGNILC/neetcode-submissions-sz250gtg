class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const arr = new Set(numbers)
        let ans = []
        this.target = target

        // for (let i of arr){
        //     if (arr.has(this.target - i) && i != this.target){
        //         ans.push(numbers.indexOf(i) + 1)
        //         ans.push(numbers.indexOf(this.target - i) + 1 )
        //         break
        //     }
        // }
        // return ans.sort(function(a,b){return a-b})

        let l = 0
        let r = numbers.length - 1
        while ( l < r){
            let curSum = numbers[l] + numbers[r]

            if ( curSum < target)
                l += 1
            else if (curSum > target) 
                r-= 1
            else 
                return [l + 1, r + 1]
        }

        return []
    }
}
