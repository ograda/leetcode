/*
2053. Kth Distinct String in an Array

https://leetcode.com/problems/kth-distinct-string-in-an-array/

Time complexity: O(n^2)
Space complexity: O(1)

Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"

Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"

Input: arr = ["a","b","a"], k = 3
Output: ""
*/

// we could aslo do it with Hasmaps on an O(n) time complexity, but we would need to store all the strings in the hashmap, so we would need O(n) space complexity
class Solution {
    public String kthDistinct(String[] arr, int k) {
        String answer = ""; 
        String empty = "";

        for (int i = 0; i < arr.length; i++) {
            boolean repeated = false;
            if (arr[i].equals(empty)) continue; // if we are checking an empty element, its a repeated string, so ignore it

            for(int j = i+1; j < arr.length; j++) {
                if (arr[i].equals(arr[j])) {
                    arr[j] = empty; // mark repeated strings
                    repeated = true; // set Ith string as repeated after loop
                }  
            }

            if (repeated) // check if i repeated and remove it
                arr[i] = empty;
            else if (--k == 0) {
                    answer = arr[i];
                    break;
                }
        }

        // if we couldn't find enough answers return empty
        return k>0?empty:answer;
    }
}