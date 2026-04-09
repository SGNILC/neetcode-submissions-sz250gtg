class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let dub = false
       let count = 1
       const map = new Map()

       for (let i of nums) {
            if (map.has(i)){
               count = map.get(i) + 1;
               map.set(i, count);
               console.log(map)
            }
            else {
                map.set(i, count)
            }
       }

       for (let [key, value] of map){
        console.log(value)
        if(value > 1)
            dub = true
       }

       return dub;

    }
}
