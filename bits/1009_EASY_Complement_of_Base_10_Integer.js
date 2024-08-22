/* 1009. Complement of Base 10 Integer

https://leetcode.com/problems/number-complement/

Time complexity: O(1)
Space complexity: O(1)

Input: num = 5
Output: 2

Input: n = 7
Output: 0

nput: n = 10
Output: 5
*/

/**
 * @param {number} n
 * @return {number}
 */

function MathFloor(n) {
    if (n >= 0) {
        return n | 0;
    } else {
        return (n | 0) - (n % 1 !== 0 ? 1 : 0);
    }
}

function MathPow(base, exponent) {
    if (exponent === 0) return 1;

    if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
    }

    let result = 1;
    for (let i = 0; i < exponent; i++) result *= base;
    return result;
}

function toBinaryString(n) {
    if (n === 0) return '0';
    let str = '';
    while (n > 0) {
        str = (n % 2) + str; // Append remainder to the front
        n = MathFloor(n / 2);
    }
    return str;
}

function binaryStringToInt(str) {
    let result = 0;
    let power = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '1') {
            result += MathPow(2, power);
        }
        power++;
    }
    return result;
}


// Approach: Bitwise with a string conversion
var bitwiseComplement = function(n) {
    let binaryStr = toBinaryString(n); // Convert to binary string
    let complementStr = '';
    
    for (let char of binaryStr) {
        complementStr += (char === '1') ? '0' : '1'; // Flip the bits
    }
    
    return binaryStringToInt(complementStr); // Convert back to integer
};