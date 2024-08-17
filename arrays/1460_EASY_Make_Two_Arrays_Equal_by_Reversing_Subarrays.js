// 1460. Make Two Arrays Equal by Reversing Sub-arrays

// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

// Time complexity: O(n)
// Space complexity: O(1)
// Expected Output: true

// Input: target = [7], arr = [7]
// Expected Output: true

// Input: target = [3,7,9], arr = [3,7,11]
// Expected Output: false

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

function countingSourt(array,maxValue){
    let count = new Array(maxValue + 1).fill(0);
    let sortedArray = new Array(array.length);

    // Count occurrences of each number in the array
    for (let i = 0; i < array.length; i++) count[array[i]]++;

    // Construct the sorted array
    let index = 0;
    for (let i = 1; i <= maxValue; i++) {
        while (count[i] > 0) {
            sortedArray[index++] = i;
            count[i]--;
        }
    }
    return sortedArray;
}

var canBeEqual = function(target, arr) {
    //here we can use a hash map OR an array of occurencies, but we can also use the sort method
    let hashTarget = new Array(1001).fill(0); // assuming we know the range of numbers (1000)
    let hashArr = new Array(1001).fill(0); // assuming we know the range of numbers (1000)

    // populate the array of occurencies
    for (let i = 0; i < target.length; i++) {
        hashTarget[target[i]]++;
        hashArr[arr[i]]++;
    }

    // compare the two arrays of occurencies
    for (let i = 0; i < hashTarget.length; i++) {
        if (hashTarget[i] !== hashArr[i]) {
            return false;
        }
    }

    /*
    // sort method PS we just need to sort arr since target is already sorted
    let superiorLimit = 1000; // assuming we know the range of numbers
    target = countingSourt(target,superiorLimit);
    arr = countingSourt(arr,superiorLimit);

    // compare the two sorted arrays
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            console.log(target[i],arr[i]);
            return false;
        }
    }
    */
    return true;
};