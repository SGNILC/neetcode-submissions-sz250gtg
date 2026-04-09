class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const map = {
            ')':'(',
            ']':'[',
            '}':'{'
        }

        // for (let i = 0; i < s.length; i++){
        //     if (s.at(i) == '(' || s.at(i) == '[' || s.at(i) == '{' )
        //         arr.push(s.at(i))
        //     else if (s.at(i) == ')' || s.at(i) == ']' || s.at(i) == '}' )
        //         arr.()
        for (let c of s){
            if (map[c]){
                if (stack.length > 0 && stack[stack.length -1] === map[c]){
                    stack.pop()
                }
                else {
                    return false
                }
            }
            else {
                stack.push(c)
            }
        }

        return stack.length === 0
        
    }
}