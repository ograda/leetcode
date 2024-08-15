// 860. Lemonade Change

// https://leetcode.com/problems/lemonade-change/description/

// Time complexity: O(n)
// Space complexity: O(1)

// Test case: [5, 5, 5, 10, 20]
// Expected output: true

// Test case: [5, 5, 10, 10, 20]
// Expected output: false

function lemonadeChange(bills: number[]): boolean {
  
    let availableChange: number[] = [0, 0]; // assuming the money as a potency of 2, 5 bills are 2^0, 10 bills are 2^1, 20 bills are 2^2 however we are ignoring 20s for the purpose of the question

    for (const bill of bills) {
        if (bill === 5) {
            availableChange[0]++; // increment the number of 5s (2^0)
        } 
        else if (bill === 10) {
            if (availableChange[0]) { // checking if we have any 5s (2^0)
                availableChange[0]--;
                availableChange[1]++;
            } else {
                return false;
            }
        }
        else if (bill === 20) {
            if (availableChange[0] && availableChange[1]) { // checking if we have a 5 and a 10 (2^0 and 2^1)
                availableChange[0]--;
                availableChange[1]--;
            } else if (availableChange[0] > 2) { // checking if we have 3 5s (2^0)
                availableChange[0] -= 3;
            } else {
                return false;
            }
        }
    }

    return true; // nothing went wrong if we reach this point
}