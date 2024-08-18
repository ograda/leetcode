// 263. Ugly Number

// https://leetcode.com/problems/ugly-number/

// time complexity: O(n)
// space complexity: 1

// Input: n = 6
// Expected output: true

// Input: 1
// Expected output: true

// Input: 14
// Expected output: false

impl Solution {
    // we don't need this because lower than 0 is not ugly
    //fn Custom_Math_Absolute(a: i32) -> i32 {
    //    if a < 0 { return -a; }  
    //    return a; 
   // }

    pub fn is_ugly(n: i32) -> bool {
        // let mut asb_n = Self::Custom_Math_Absolute(n); // get the absolute value of the number
        // lets divide the question in two cases, if the number lower than zero (always false) and if the number is greater than zero

        let mut it = n; // create a mutable iterator
   
        // if the number is lower than zero, it is not an ugly number
        if it <= 0 { return false; }

        // now that we stablished that the number is not one, lets factor it until we get a number that is not divisible by 2, 3 or 5
        while it % 2 == 0 { it /= 2; } // divide by 2
        while it % 3 == 0 { it /= 3; } // divide by 3
        while it % 5 == 0 { it /= 5; } // divide by 5

        // if the number is one, it is an ugly number
        return it==1;
    }
}

/*
    match n {
        _ if n <= 0 => false,  // Case 1: If `n` is less than or equal to 0, return false
        mut num => {           // Case 2: Otherwise, bind `n` to a mutable variable `num`
            for p in [2, 3, 5].iter() {  // Iterate over the prime factors 2, 3, and 5
                while num % p == 0 {     // While `num` is divisible by the current prime factor `p`
                    num /= p;            // Divide `num` by `p`
                }
            }
            num == 1  // Return true if `num` is reduced to 1, otherwise return false
        }
    }
 */