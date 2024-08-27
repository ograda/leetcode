/*
4. Median of Two Sorted Arrays

https://leetcode.com/problems/median-of-two-sorted-arrays/

time complexity: O(log(min(n1,n2)))
space complexity: O(1)

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
*/

class Solution {

public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }

        // for small data sets we can use a simpler approach (it should work in this case) that is exactly time O((n1+n2)/2) and also O(1) in space, since the arrays are already ordered, we can get two "pointers" to the array positions, create a while until we are in the middle of the array and answer. (since we are dealing with sorted arrays we can assume that the next element will be the smallest of nums1[pointer1] and nums2[pointer2]). to answer if we are dealing with an odd size of nums1+nums2 we send the last item choose, and if we are not we sent the last chosen + the bigger from the not chosen and the last chosen divided by two --> this implementation is considerably easier but it gets considerably worse for larger inputs.
        /*
        int n1Size = nums1.size();
        int n2Size = nums2.size();
        int newSize = n1Size +  n2Size;
        int midFlag = (newSize+1)/2;

        int pointer1 = 0, pointer2 =0;
        for (int i =0; i<midFlag; i++){
            if (pointer1 < n1Size && (pointer2 >= n2Size || nums1[pointer1] <= nums2[pointer2])) pointer1++;
            else pointer2++;
        }

        int first = (pointer1 == 0) ? nums2[pointer2-1] : 
                        (pointer2 == 0) ? nums1[pointer1-1] : 
                        max(nums1[pointer1-1], nums2[pointer2-1]);

        // We are dealing with an even number we need the extra number
        if (newSize % 2 == 0) {// we are dealing with an even number we need the extra number
            int second = (pointer1 == n1Size) ? nums2[pointer2] : 
                         (pointer2 == n2Size) ? nums1[pointer1] : 
                         min(nums1[pointer1], nums2[pointer2]);
            return (first + second)/2.0;
        }
        else // Or the sum is odd and we can answer the mid number.
            return first;
*/

        // binary search
        int x = nums1.size();
        int y = nums2.size();

        int low = 0, high = x; // we can do this since we ensured that x is bigger than y
        while (low <= high) {
            // now we must find a partition that that fits the condition needed to answer
            int partitionX = (low + high) / 2;
            int partitionY = (x + y + 1) / 2 - partitionX;

            int maxX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
            int maxY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];

            int minX = (partitionX == x) ? INT_MAX : nums1[partitionX];
            int minY = (partitionY == y) ? INT_MAX : nums2[partitionY];

            // Found the correct partition ?
            if (maxX <= minY && maxY <= minX) {
                // lets check if we need an extra number (in case the new size is even)
                if ((x + y) % 2 == 0) {
                    return ((double)max(maxX, maxY) + min(minX, minY)) / 2;
                } else {
                    return (double)max(maxX, maxY);
                }
            } else if (maxX > minY) {
                high = partitionX - 1; // Move towards left in nums1
            } else {
                low = partitionX + 1; // Move towards right in nums1
            }
        }

    // we shouldn't be here.
    return nums1[0];
    }
};