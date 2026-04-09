class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
       let l = 1, r = Math.max(...piles);
       let rate = r

       while (l <= r) {
        let k = Math.floor((l + r) / 2)
        let totalHours = 0;

        for (let pile of piles){
                totalHours += Math.ceil(pile / k)
        }
                if (totalHours <= h){
                    rate = k
                    r = k - 1
                }
                else
                    l = k + 1
        
       } 
        return rate
    }

}
    