// 624. Maximum Distance in Arrays

// https://leetcode.com/problems/maximum-distance-in-arrays/

// Time complexity: O(n)
// Space complexity: O(1)

// Input: arrays = [[1,2,3],[4,5],[1,2,3]]
// Expected Output: 4

// Input: arrays = [[1],[1]]
// Expected Output: 0

/**
 * @param {number[][]} arrays
 * @return {number}
 */

// function to get the absolute value |A| = A if A > 0 else -A
 function absolute (a) {
    return (a < 0) ? -a : a;
 }

// return the biggest number from three numbers
 function bigger_in_three(a, b, c) {
    return (a>b) ? (a>c ? a : c) : (b>c ? b : c);
 }

var maxDistance = function(arrays) {
    // starting the code with the first array
    var lowest = arrays[0][0]; 
    var highest = arrays[0][arrays[0].length - 1]; 
    var distance = 0;

    for (var i = 1; i < arrays.length; i++) {
        // lets get the lowest and highest value of the current array
        currentArrayLowest = arrays[i][0];
        currentArrayHigest = arrays[i][arrays[i].length - 1];

        // now lets check the distance between the lowest and highest
        distance = bigger_in_three(distance, absolute(highest - currentArrayLowest), absolute(currentArrayHigest - lowest))

        //now lets check each array first and last pos to see if we need to update the values from global lowest and highest
        lowest = (lowest > currentArrayLowest) ? currentArrayLowest : lowest;
        highest = (highest < currentArrayHigest) ? currentArrayHigest : highest;
    }

    return distance;
};