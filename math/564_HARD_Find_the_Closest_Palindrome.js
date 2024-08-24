/* 
564. Find the Closest Palindrome

https://leetcode.com/problems/find-the-closest-palindrome/

Example 1:

Input: n = "123"
Output: "121"

Input: n = "1"
Output: "0"
*/


/**
 * @param {string} n
 * @return {string}
 */

// NOTE THAT, WE ARE DEALING WITH A BIG NUMBEER, SO WE NEED TO USE BigInt, TO AVOID OVERFLOW

function getTheClosestPalindrome(original, str1, str2,str3, str4, str5) {
    // Convert the string inputs to integers
    const originalBigInt = BigInt(original);
    const num1 = originalBigInt - BigInt(str1);
    const num2 = originalBigInt - BigInt(str2);
    const num3 = originalBigInt - BigInt(str3);
    const num4 = originalBigInt - BigInt(str4);
    const num5 = originalBigInt - BigInt(str5);

    let smallest = Math.min(
        Math.abs(Number(num1)),
        Math.abs(Number(num2)),
        Math.abs(Number(num3)),
        Math.abs(Number(num4)),
        Math.abs(Number(num5))
    );

    let biggest = Math.max(
        Math.abs(Number(num1)),
        Math.abs(Number(num2)),
        Math.abs(Number(num3)),
        Math.abs(Number(num4)),
        Math.abs(Number(num5))
    );

    let answer = original + biggest;

    // Find the closest palindrome with the smallest difference
    if (smallest === Math.abs(Number(num1))) answer = BigInt(str1);
    if (smallest === Math.abs(Number(num2)) && BigInt(str2) < answer) answer = BigInt(str2);
    if (smallest === Math.abs(Number(num3)) && BigInt(str3) < answer) answer = BigInt(str3);
    if (smallest === Math.abs(Number(num4)) && BigInt(str4) < answer) answer = BigInt(str4);
    if (smallest === Math.abs(Number(num5)) && BigInt(str5) < answer) answer = BigInt(str5);

    // Return the result as an integer
    return answer.toString();
}

function createPalindrome(half, evenLength) {
    // For evenLength, mirror the full `half`, for odd, exclude the last digit
    const mirrored = half + half.slice(0, evenLength ? undefined : -1).split('').reverse().join('');
    return mirrored;

}

var nearestPalindromic = function(n) {
    // Right we need to take care of some edge cases first, so if we are treating a number with a single digit, we can just return the number - 1
    if (n.length === 1) return (Number(n) - 1).toString();

    // now we need to form edge cases, we need to check ne highest palindrome with n-1 digits (9...9) and the smallest for n+1 (10...01)
    const digits = n.length;
    const highestNMinusOne = (10 ** (digits - 1) - 1).toString(); // 999 for n=1000
    const lowestNPlusOne = (10 ** digits + 1).toString(); // 10001 for n=1000

    // Split and handle even/odd length
    let firstHalf = n.slice(0, Math.floor((digits + 1) / 2));
    const firstHalfMinusOne = (Number(firstHalf) - 1).toString();
    const firstHalfPlusOne = (Number(firstHalf) + 1).toString();

    // lets create the comparison nearest palincromes (half - 1, half, half + 1)
    palindrome1 = createPalindrome(firstHalf, digits % 2 === 0);
    const palindrome2 = createPalindrome(firstHalfMinusOne, digits % 2 === 0);
    const palindrome3 = createPalindrome(firstHalfPlusOne, digits % 2 === 0);

    // since we cannot answer the number itself, lets check if we are dealing with a palindrome
    if (n===palindrome1) palindrome1 = palindrome2;
    return getTheClosestPalindrome(n, palindrome1, palindrome2, palindrome3, highestNMinusOne, lowestNPlusOne)
};