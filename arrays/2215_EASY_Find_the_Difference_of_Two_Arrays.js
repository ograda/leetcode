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

// alternatively we can iterate trough the second array and remove the elements from the first array
var intersection = function(nums1, nums2) {
    // create the hash table deslocating 1000 slots (since our input can be up to negative 1000)
    let hash = new Array(1001).fill(0);
    let minor = nums1.length >= nums2.length ? nums2 : nums1;
    let major= nums1.length < nums2.length ? nums2 :nums1;
    let i =0
    while (i < minor.length){
        hash[minor[i]] = hash[minor[i]] >= 2 ? 3:1;
        hash[major[i]] = (hash[major[i]] === 1 || hash[major[i]] === 3) ? 3:2;
        i++;
    }
    while (i<major.length){
        hash[major[i]] = (hash[major[i]] === 1 || hash[major[i]] === 3) ? 3:2;
        i++;
    }

    let result = [];

    // Iterate through the hash array to collect results
    for (let j = 0; j < 1001; j++) 
        if (hash[j] === 3) result.push(j); // Add to result1 if value in hash is 3 (is present in both arrays)
    

    // Return the result arrays as a two-dimensional array
    return result;
};