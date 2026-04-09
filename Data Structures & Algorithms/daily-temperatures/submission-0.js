class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [] // [temp, index]
        
        for (let i = 0; i < temperatures.length; i++){
            let t = temperatures[i] 
                while (stack.length > 0 && t > stack[stack.length - 1][0]){
                    let [stackT, stackI] = stack.pop()
                     res[stackI] = i - stackI
                 }
                stack.push([t, i])
            }
            return res

        }

    }
