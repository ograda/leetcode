/*
9. Palindrome Number

https://leetcode.com/problems/palindrome-number/

time complexity: O(n)
space complexity: 1

Input: x = 121
Output: true

Input: x = -121
Output: false

Input: x = 10
Output: false
*/

impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
    // Negative numbers are never palindromes
    if x < 0 {
        return false;
    }

    let mut original = x;
    let mut reversed = 0;

    while original > 0 {
        // We are dealing with the actual reversed number, incrementing its decimal case, and decrementing the original number
        reversed = reversed * 10 + original % 10;
        original /= 10;
    }

    // Check if the original is equal to the reversed
    x == reversed
}
}