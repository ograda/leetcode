/*
1514. Path with Maximum Probability

https://leetcode.com/problems/path-with-maximum-probability/

time complexity: O(n*e)
space complexity: O(n+e)

Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000

Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000

Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
Output: 0.00000
*/

class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start_node, int end_node) {
        // Create an adjacency list where each node points to a list of pairs (neighbor, probability)
        vector<vector<pair<int, double>>> graph(n);
        for (int i = 0; i < edges.size(); ++i) {
            int u = edges[i][0];
            int v = edges[i][1];
            double prob = succProb[i];
            graph[u].emplace_back(v, prob);
            graph[v].emplace_back(u, prob);
        }

        // Use a priority queue to store pairs of (probability, node), ordered by highest probability
        priority_queue<pair<double, int>> pq;
        pq.emplace(1.0, start_node);  // Start with the initial node, probability of 1

        // Vector to store the maximum probability to reach each node
        vector<double> maxProb(n, 0.0);
        maxProb[start_node] = 1.0;

        while (!pq.empty()) {
            double currProb = pq.top().first;
            int node = pq.top().second;
            pq.pop();

            // If we reach the destination, return the probability
            if (node == end_node) {
                return currProb;
            }

            // Traverse the neighbors
            for (const auto& neighbor : graph[node]) {
                int nextNode = neighbor.first;
                double edgeProb = neighbor.second;

                // Calculate new probability through this edge
                double newProb = currProb * edgeProb;

                // If this path gives a better probability, take it
                if (newProb > maxProb[nextNode]) {
                    maxProb[nextNode] = newProb;
                    pq.emplace(newProb, nextNode);
                }
            }
        }

        // If we reach here, it means there's no path from start to end
        return 0.0;
    }
};