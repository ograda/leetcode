/*
703. Kth Largest Element in a Stream

https://leetcode.com/problems/kth-largest-element-in-a-stream/

Time complexity: O(nlogk)
Space complexity: O(k)

Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".

Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

*/


class KthLargest {
    private PriorityQueue<Integer> minHeap;
    private int k;

    public KthLargest(int k, int[] nums) {
        this.k = k; // Define the Kth number we should compara
        this.minHeap = new PriorityQueue<>(k); // Create a priority heap of size k

        // Add elements to the heap
        for (int num : nums) {
            add(num);
        }
    }
    
    public int add(int val) {
        // Check if we have more than k values
        if (minHeap.size() < k) {
            // If not, just add the number
            minHeap.offer(val);
        } else if (val > minHeap.peek()) {
            // Pop the smaller one to go back to k size
            minHeap.poll();
            minHeap.offer(val);
        }

        // The root of the heap is the kth largest element
        // This works because we are only storing k elements and we are poping everything that is smaller
        return minHeap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */