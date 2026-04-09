class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trans1 = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
        let halfway = Math.floor(trans1.length / 2)
        let pal = true;

        for (let i = 0; i < trans1.length-1; i++){
            let check = trans1.charAt(trans1.length - 1 - i)
            if (trans1.at(i) != check){
                console.log("Error")
                return false
            }

            if (i == halfway){
                break
            }
        }
        
        return pal
    }
}
