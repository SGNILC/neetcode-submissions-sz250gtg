class Solution {
    /**
     * @param {string} s
     * @return {string}
     * 
     * Time Complexity: O(n) * O(K log k)
     * Space Complexity: O(n) + O(k)
     * 
     */
    reorganizeString(string) {
        let stringMap = new Map();

        // Time Complexity: O(n) + O(1)
        // Create and store [characters, frequency] in a has map
        for (let i = 0; i < string.length; i++){
            let char = string[i];

            //Lookup: O(1)
            if (!stringMap.has(char)) {
                stringMap.set(char, 1);
            }
            else {
                stringMap.set(char, stringMap.get(char) + 1);
            }
            console.log(stringMap);
        }

        // Time Complexity: O(n) + O(1)
        // check ability for reorganization
        for (let key of stringMap.keys()){
            if (key > Math.ceil((string.length / 2))) { 
                return "";
            } 
        }
        
        //Time Complexity: O(n) + O(n^2)
        // Creating a priority queue in the form of a heap
        const heap = [...stringMap.entries()];
        heap.sort((a,b) => b[1] - a[1]); // sorts frequencies in descending order

        let result = "";


        // Creating the output by appending characters with highest frequency to the result
        //Time Complexity: O(n) * O(n^2)
        while (heap.length > 1){
            
            // returns the top 2 characters with highest frequecies
            let [char1, freq1] = heap.shift();
            let [char2, freq2] = heap.shift();

            // appends to result and decrements frequemcies
            result += char1 + char2;
            freq1--;
            freq2--;

            // if any frequencies remainm push them back into the queue
            if (freq1 > 0 ) 
                heap.push([char1, freq1]);
            if (freq2 > 0)
                heap.push([char2, freq2]);

            // sorts queue again to ensure descending order by frequency
            heap.sort((a, b) => b[1] - a[1]);
        }

        // Checks if there are any remaining characters with frequency >= 1
        if (heap.length){
            let [lastChar, freq] = heap[0];
            // if greater than 1, rearrangement to meet condition is not possible
            if (freq > 1) return "";
            result += lastChar; // otherwise, append to string
        }
        
        return result;

    }
} 
