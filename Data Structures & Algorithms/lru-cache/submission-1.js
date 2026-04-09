class LRUCache {

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map();
        let used_items = []
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if (!this.cache.has(key)){
            return -1;
        }

        this.makeLeastUsed(key);

        return this.cache.get(key)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)){
            this.cache.delete(key)
        }
        else if (this.cache.size >= this.capacity){
            const lru = this.cache.keys().next().value
            this.cache.delete(lru)
        }

        this.cache.set(key, value)
    }

    makeLeastUsed(key){
        const value = this.cache.get(key);
        this.cache.delete(key)
        this.cache.set(key, value)
    }
}
