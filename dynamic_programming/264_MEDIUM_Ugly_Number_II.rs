// 264. Ugly Number II

// https://leetcode.com/problems/ugly-number-ii/

// time complexity: O(n)
// space complexity: O(n)

// Input: n = 10
// Expected output: 12

// Input: 1
// Expected output: 1

impl Solution {
    fn Custom_Math_Min(a: i32, b: i32, c: i32) -> i32 {
        if a < b { if a < c {  return a; } return c;} 
        if b < c {  return b; }
        return c; 
    }

    pub fn nth_ugly_number(n: i32) -> i32 {
        //right we need to find the nth ugly number (divisible by 2 3 and 5)
        // there are two approachs for this problem, the brute force one, where you will check all the divisors from a given N, wich we can improve to size/2 operations but its still a nlogn solution
        // or we can do a DP solution where we will only store the next uggly number inline and three pointers to the last uggly number that was multiplied by 2, 3 and 5
        let mut div_by_two = 0; // create iterators
        let mut div_by_three = 0; 
        let mut div_by_five = 0; 
        let mut answer = vec![1;n as usize]; // create answer array

        for i in 1..n as usize {
            let next_factor_by_two:i32 = answer[div_by_two] * 2; // get the next factor by two
            let next_factor_by_three:i32 = answer[div_by_three] * 3; // get the next factor by three
            let next_factor_by_five:i32 = answer[div_by_five] * 5; // get the next factor by five

            // get the minimum of the three factors
            answer[i] = Self::Custom_Math_Min(next_factor_by_two,next_factor_by_three,next_factor_by_five); 

            //update the pointers
            if answer[i] == next_factor_by_two { div_by_two += 1; }
            if answer[i] == next_factor_by_three { div_by_three += 1; }
            if answer[i] == next_factor_by_five { div_by_five += 1; }
            println!("i: {} IthElement: {} 2fact: {} 3fact: {} 4fact: {}", i, answer[i],div_by_two,div_by_three,div_by_five);
        }

        return answer[(n-1) as usize];
    }
}