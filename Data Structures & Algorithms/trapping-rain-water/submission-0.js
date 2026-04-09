class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftp = 0, rightp = height.length-1
        let maxL = height[leftp], maxR = height[rightp]
        let capacity = 0

        while (leftp < rightp){
            if (maxL < maxR){
                leftp += 1
                maxL = Math.max(maxL, height[leftp])
                capacity += (maxL - height[leftp])
                console.log(capacity)
            }
            else {
                rightp -= 1
                maxR = Math.max(maxR, height[rightp])
                capacity += maxR - height[rightp]
                console.log(capacity)
            }
        }

        return capacity
    }
}
