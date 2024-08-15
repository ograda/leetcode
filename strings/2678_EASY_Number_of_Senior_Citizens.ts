// 2678. Number of Senior Citizens

// https://leetcode.com/problems/number-of-senior-citizens/description/

// time complexity: O(n)
// space complexity: O(1)

// details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Expected output: 2

// Test case: details = ["1313579440F2036","2921522980M5644"]
// Expected output: 0

function countSeniors(details: string[]): number {
    let Amount = 0; // Initialize a counter variable to keep track of the number of senior citizens

    // Cut the hole number and check if the age is greater than 60
    /*
    for (let i = 0; i < details.length; i++) {
        let age = parseInt(details[i].slice(11, 13)); // Extract the age from the current format
        if (age > 60) { 
            Amount++;
        }
    }
    */

    // do two direct cuts and check if the age is greater than 60
    for (let i = 0; i < details.length; i++) {
        let ageA = parseInt(details[i][11]); // Extract the first digit of the age and check if we need to get the second
        if (ageA > 6) Amount++;
        else if (ageA === 6) {
            let ageB = parseInt(details[i][12]); // first digit is 0 we need to check the second digit for 0
            if (ageB > 0) Amount++;
        }
    }



    // Return the final amount of senior citizens
    return Amount;
}