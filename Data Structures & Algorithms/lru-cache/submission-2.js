/**
 * My LRUCache supports O(1) time complexity 
 * for both get and put operations using a Map.
 * 
 */
class LRUCache {

    /**
     * Initializes a cache with a given capacity. The cache uses a Map DS
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map(); // Maintains insertion orer for LRU tracking
    }

    /**
     * Retreives the value associated with the given key. If the key exists,
     * it is marked as recently used
     * 
     * @param {number} key
     * @return {number}
     * Time Complexity: O(1)
     */
    get(key) {

        if (!this.cache.has(key)){
            return -1; // if key is not found
        }

        //a helper function which attaches the key to the end of cache; identifies it as recently used
        this.makeLeastUsed(key);

        return this.cache.get(key) // if key exists, returns the value
    }

    /**
     * This code inserts or updates the value for a given key. If the cache exceeds 
     * capacity, it will delete the LRU key
     * @param {number} key
     * @param {number} value
     * @return {void}
     * Time Complexity: O(1)
     */
    put(key, value) {
        if (this.cache.has(key)){
            // Removes the existing key to update its position
            this.cache.delete(key)
        }
        else if (this.cache.size >= this.capacity){
            // Removes the LRU item (the first key in the map)
            const lru = this.cache.keys().next().value
            this.cache.delete(lru)
        }

        // Inserts the new key-value pair as most recently used
        this.cache.set(key, value)
    }

    /**
     * Helps identify if a key item has been used by moving it to the end of the Map
     * @param {number} key
     * @return {void}
     */
    makeLeastUsed(key){
        const value = this.cache.get(key);
        this.cache.delete(key)
        this.cache.set(key, value)
    }
}
