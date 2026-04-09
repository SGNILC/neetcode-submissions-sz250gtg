class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let res = 0

        for (let i = 0; i < tokens.length; i++){
            if (isNaN(tokens[i])){
                let operator = tokens[i]

                    if (operator == '+'){
                        stack.push(stack.pop() + stack.pop())

                    }
                    else if (operator == '-'){
                        let val1 = stack.pop()
                        let val2 = stack.pop()
                        res = val2 - val1
                        stack.push(res)
                    }
                    else if (operator == '/'){
                        let val1 = stack.pop()
                        let val2 = stack.pop()
                        res = (val2 / val1)
                        if (res < 0)  
                            res = Math.ceil(res)
                        else 
                           res = Math.floor(res)
                        stack.push(res)
                       
                    }
                    else {
                        stack.push(stack.pop() * stack.pop())
                    }
                }
                else {
                    stack.push(parseInt(tokens[i])) 
                     console.log(stack)

                }
            }
            return stack.pop()

        }
    }
