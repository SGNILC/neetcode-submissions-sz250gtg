class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if (s.length != t.length) {return false}

       let map = new Map()
       let val = 1;

       for (let i of s){
        if (map.has(i)){
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, val)
        }
       }

       for (let i of t){
        if(!map.has(i)){ return false}
        
        if (map.has(i)){
            map.set(i, map.get(i) - 1)
            if (map.get(i) <= -1){
                return false
            }
        }
        else {
            map.set(i, val-1)
        }
       }
       console.log(map)

       return true
    }
}
