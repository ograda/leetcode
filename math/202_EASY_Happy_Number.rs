// 202. Happy Number

// https://leetcode.com/problems/happy-number/

// time complexity: O(log n)
// space complexity: 1

// Input: n = 19
// Expected output: true

// Input: 2
// Expected output: false

impl Solution {
    pub fn is_happy(n: i32) -> bool {
        // function to reduce the number to the sum of the squares of its digits
        fn sum_of_squares(mut n: i32) -> i32 {
            let mut sum = 0;
            while n > 0 {
                let digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            sum
        }

        // Floyd's Tortoise and Hare cycle detection algorithm
        let mut tortoise = n;
        let mut hare = sum_of_squares(n);

        // if by any case tortoise == hare, we have a cycle
        while hare !=1 && tortoise != hare {
            tortoise = sum_of_squares(tortoise);
            hare = sum_of_squares(sum_of_squares(hare));
        }   

        // if we can find a cycle that returns to 1, the number is happy
        return hare==1;
    }
}