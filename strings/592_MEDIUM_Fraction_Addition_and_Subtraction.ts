/* 
592. Fraction Addition and Subtraction

https://leetcode.com/problems/fraction-addition-and-subtraction/

Example 1:
Input: expression = "-1/2+1/2"
Output: "0/1"

Example 2:
Input: expression = "-1/2+1/2+1/3"
Output: "1/3"

Example 3:
Input: expression = "1/3-1/2"
Output: "-1/6"
*/

//calculate the great common denominator
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

// calculate the least common multiple
function lcm(a: number, b: number): number {
    return a * b / gcd(a, b);
}

// lets start splitting the string until the last number, the string can be split into many groups of parts initiated by "+/-" then split in the middle by "N/D"
function fractionAddition(expression: string): string {
        // lets start splitting the string until the last number, the string can be split into many groups of parts initiated by "+/-" then split in the middle by "N/D"
        // save the current numerators
        // we need to calculate the common denominator for the fraction
        // extract the common expression
            let fractions = expression.match(/[+-]?\d+\/\d+/g) || [];
            let numerators: number[] = [];
            let denominators: number[] = [];
            
            for (let frac of fractions) {
                let [numerator, denominator] = frac.split('/').map(Number);
                numerators.push(numerator);
                denominators.push(denominator);
            }
        
            // Find the LCD of all denominators
            let commonDenominator = denominators.reduce((acc, curr) => lcm(acc, curr));
        
            // Sum all numerators adjusted to the common denominator
            let resultNumerator = 0;
            for (let i = 0; i < numerators.length; i++) {
                resultNumerator += numerators[i] * (commonDenominator / denominators[i]);
            }
        
            // Simplify the resulting fraction
            const commonDivisor = gcd(Math.abs(resultNumerator), commonDenominator);
            resultNumerator /= commonDivisor;
            commonDenominator /= commonDivisor;
        
            return `${resultNumerator}/${commonDenominator}`;
};