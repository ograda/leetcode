/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/

Time complexity: O(n)
Space complexity: O(1)

Input: s = "III"
Output: 3

Input: s = "LVIII"
Output: 58

Input: s = "MCMXCIV"
Output: 1994
*/

class Solution {
    public int romanToInt(String s) {
        // Create a map of roman characters value
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int total = 0;
        int prevValue = 0;

        // Iterate through each character in the string, we are moving backwards so we can just add any numbers that are equal or greater than our previous and if we found a decresing value, we should subtract it.
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = romanValues.get(s.charAt(i));
            if (currentValue >= prevValue) {
                total += currentValue;
            } else {
                total -= currentValue;
            }
            prevValue = currentValue;
        }

        return total;
    }
}