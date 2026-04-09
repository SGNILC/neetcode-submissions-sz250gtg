class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * Time Complexity: O(log (m * n)) — binary search over total number of elements
     * Space Complexity: O(1) — no extra space used
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;

        const rows = matrix.length;
        const cols = matrix[0].length;

        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / cols);
            const col = mid % cols;
            const midValue = matrix[row][col];

            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
