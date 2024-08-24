/* 
2215. Find the Difference of Two Arrays

https://leetcode.com/problems/find-the-difference-of-two-arrays/

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function(nums1, nums2) {
    // create the hash table deslocating 1000 slots (since our input can be up to negative 1000)
    let hash = new Array(2001).fill(0);
    let minor = nums1.length >= nums2.length ? nums2 : nums1;
    let major= nums1.length < nums2.length ? nums2 :nums1;
    let i =0
    while (i < minor.length){
        hash[minor[i]+1000] = hash[minor[i]+1000] >= 2 ? 3:1;
        hash[major[i]+1000] = (hash[major[i]+1000] === 1 || hash[major[i]+1000] === 3) ? 3:2;
        i++;
    }
    while (i<major.length){
        hash[major[i]+1000] = (hash[major[i]+1000] === 1 || hash[major[i]+1000] === 3) ? 3:2;
        i++;
    }

    let result1 = [];
    let result2 = [];

    // Iterate through the hash array to collect results
    for (let j = 0; j < 2001; j++) {
        if (hash[j] === 1) result1.push(j - 1000); // Add to result1 if value in hash is 1
        else if (hash[j] === 2) {
            result2.push(j - 1000); // Add to result2 if value in hash is 2
        }
    }

    // Return the result arrays as a two-dimensional array
    return minor == nums1 ? [result1, result2] : [result2, result1];
};