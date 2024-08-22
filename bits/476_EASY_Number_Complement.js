/* 476. Number Complement

https://leetcode.com/problems/number-complement/

Time complexity: O(1)
Space complexity: O(1)

Input: num = 5
Output: 2

Input: num = 1
Output: 0
*/

/**
 * @param {number} num
 * @return {number}
 */

// Approach: Bitwise not with bitmask and
var findComplement = function(num) {

    // Determine the number of bits needed to represent num
    let numBits = Math.floor(Math.log2(num)) + 1;
    
    // Generate the bitmask with the same number of bits
    let bitmask = (1 << numBits) - 1;

    return (~num) & bitmask;
};