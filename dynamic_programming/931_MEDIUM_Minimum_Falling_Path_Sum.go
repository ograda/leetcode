// 931. Minimum Falling Path Sum

// https://leetcode.com/problems/minimum-falling-path-sum/

// time complexity: O(rows*collumns)
// space complexity: O(collumns)

// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Expected output: 13

// Input: matrix = [[-19,57],[-40,-5]]
// Expected output: -59

// MATHmin returns the minimum value between a, b and optional c.
func MATHmin(a int, b int, c ...int) int {
	if a<b {
		if len(c) == 0 { return a } 
		if a<c[0] { return a }
	} else {
		if len(c) == 0 { return b }
		if b<c[0] { return b}
	}
	return c[0]
	//if len(c) == 0 return (a<b) ?a:b;
	//return (a<b) ? (a<c ? a :c) : (b<c : b : c);
}

// MinFallingPathSum returns the minimum sum of a falling path through the given square array.
func minFallingPathSum(matrix [][]int) int {
	//[0,0] - > [[1,0],[1,1]] 
	//[1,0] - > [[2,0],[2,1]]
	//[1,1] - > [[2,0],[2,1],[2,2]]

	// since we are looking for the best way to get to the last row we can start backwards and only spend O(collumns) space complexity
	lenght := len(matrix) // get the lenght of the matrix
	bestPath := make([]int,lenght) // create an array for the dinamic programming

	// Initialize the bestPath array with the last row of the matrix
	for j := 0; j < lenght; j++ {
		bestPath[j] = matrix[lenght-1][j]
	}

	// iterate backwards from the second to last row
	for i := lenght - 2; i>=0; i-- {
		tempPath := make([]int, lenght) // create a temporary array to store the current row's best path sums
		// iterate over the columns to find the best path
		for j := lenght - 1; j>=0; j-- {
			// in the first and last element we dont have a left/right extra iteration
			if j == 0 {
				tempPath[j] = matrix[i][j] + MATHmin(bestPath[j], bestPath[j+1])
			} else if j == lenght-1 {
				tempPath[j] = matrix[i][j] + MATHmin(bestPath[j], bestPath[j-1])
			} else {
				tempPath[j] = matrix[i][j] + MATHmin(bestPath[j], bestPath[j-1], bestPath[j+1])
			}
		}
		bestPath = tempPath // update bestPath with current row results
	}

	//find the best result
	answer := bestPath[0]
	for j := 1; j < lenght; j++ {
		answer = MATHmin(answer, bestPath[j])
	}

	return answer
}