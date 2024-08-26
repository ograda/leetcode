/*
1. Two Sum

https://leetcode.com/problems/two-sum/

time complexity: O(n)
space complexity: 1

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,2,4], target = 6
Output: [1,2]


Input: nums = [3,3], target = 6
Output: [0,1]
*/

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = std::collections::HashMap::new();
    // Here we are creating a hash to deal with the number location, so we are assuming there always will be a result.
    // We need to save the location of the number in the hash and check if the number appeared subtracting the current position from the target number, if we can find an associated hash with it, than we have an answer.

    for (i, &num) in nums.iter().enumerate() {
        // lets figure what number we need to find to answer the problem on each iteration
        let complement = target - num;
        if let Some(&index) = map.get(&complement) {
            return vec![index as i32, i as i32];
        }
        map.insert(num, i);
    }

    vec![] // Should never be reached as per problem assumption
}
}
