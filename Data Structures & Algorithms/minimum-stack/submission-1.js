class MinStack {
    
    constructor() {
        this.items = []
        this.count = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items[this.count] = val
        this.count++
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.items == 0) return undefined
        let deletedItem = this.items[this.count - 1]
        this.items.splice(this.count-1, 1)
        this.count--

        return deletedItem
    }

    /**
     * @return {number}
     */
    top() {
        return this.items.at(this.count - 1)
    }

    /**
     * @return {number}
     */
    getMin() {
        let arr = []
        let arr2 = []

        arr = arr.concat(this.items)
        arr2 = arr2.concat(this.items.sort(function(a,b){return a-b}))

        this.items = arr
        return  arr2.at(0)
    }
}

const minStack = new MinStack()
minStack.push(1);
minStack.push(2);
minStack.push(0);

console.log(minStack)
console.log(minStack.getMin()); // return 0
console.log(minStack.pop())
console.log(minStack)

console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1
