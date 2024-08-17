// 1937. Maximum Number of Points with Cost

// https://leetcode.com/problems/maximum-number-of-points-with-cost/

// time complexity: O(rows*collumns)
// space complexity: O(collumns)

// Input: points = [[1,2,3],[1,5,1],[3,1,1]]
// Expected output: 9

// Input: points = [[1,5],[2,3],[4,2]]
// Expected output: 11


func MATHabs(x int) int {
	if x>=0 { return x }
	return -x;
}

func MATHmax(a int, b int) int {
	if a>b { return a }
	return b
}

func maxPoints(points [][]int) int64 {
	// Right since we can't assume a greedy approach because of scenarios like this {[1,1,1,1,5],[6,1,1,1,1,],[1,1,1,4,1]} where the gready aproach would give us 8 but the correct answer is 9
	// We need to use dynamic programming to solve this problem
	// We will create a 2D array bestPath where to store the updated best baths for each row and column
	pointsRows := len(points)
	pointsCols := len(points[0])
	bestPath := make([]int,pointsCols) // create an array for the dinamic programming

	// Initialize the bestPath array with the first row of points
	for j := 0; j < pointsCols; j++ {
		bestPath[j] = points[0][j]
	}

	for i := 1; i < pointsRows; i++ {
		// Create a temporary array to store the best path for the current row
		tempLeftPath := make([]int, pointsCols)
		tempRightPath := make([]int, pointsCols)

		// Check the best path from the left and right sides of the current elements to define the best path for each joint
		tempLeftPath[0] = bestPath[0]
		tempRightPath[pointsCols-1] = bestPath[pointsCols-1]
		for j := 1; j < pointsCols; j++ {
			tempLeftPath[j] = MATHmax(tempLeftPath[j-1] -1, bestPath[j])
			tempRightPath[pointsCols-j-1] = MATHmax(tempRightPath[pointsCols-j] -1, bestPath[pointsCols-j-1])
		}

		// Update the bestPath array with the best path for the current row
		for j := 0; j < pointsCols; j++ {
			bestPath[j] = points[i][j] + MATHmax(tempLeftPath[j], tempRightPath[j])
		}
	}

	//find the best result
	answer := bestPath[0]
	for j := 1; j < pointsCols; j++ {
		answer = MATHmax(answer, bestPath[j])
	}

	return int64(answer);
}