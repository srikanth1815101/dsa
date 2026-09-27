---
title: "Floyd Warshall - Solution"
problemUrl: "/problems/floyd-warshall/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The **Floyd-Warshall algorithm** calculates shortest path distances between every pair of vertices in an `O(V^3)` dynamic programming approach.

It builds shortest paths incrementally by considering each vertex `k` as an intermediate stepping stone between source `i` and destination `j`:
1. For each intermediate vertex `k` from `0` to `n - 1`:
   - For each source vertex `i` from `0` to `n - 1`:
     - For each destination vertex `j` from `0` to `n - 1`:
       - If path `i -> k` and `k -> j` are both reachable, check if `matrix[i][k] + matrix[k][j] < matrix[i][j]`.
       - If so, update `matrix[i][j] = matrix[i][k] + matrix[k][j]`.

To handle the `-1` representing unreachable vertices cleanly without integer overflow:
- Replace `-1` with a large sentinel value `INF = 100000000` (except on the main diagonal where `matrix[i][i] = 0`).
- Apply the 3 nested loops over `k`, `i`, and `j`.
- Convert any distances that remain `>= INF` back to `-1`.

### Step-by-Step Algorithm:
1. Let `n = matrix.length` and create a deep copy or in-place modify with `INF = 100000000`.
2. Convert all non-diagonal `-1` entries into `INF`.
3. Loop `k` from `0` to `n - 1` (intermediate node):
   - Loop `i` from `0` to `n - 1` (start node):
     - Loop `j` from `0` to `n - 1` (end node):
       - If `matrix[i][k] != INF` and `matrix[k][j] != INF`:
         - If `matrix[i][k] + matrix[k][j] < matrix[i][j]`:
           - Set `matrix[i][j] = matrix[i][k] + matrix[k][j]`.
4. Replace all entries where `matrix[i][j] >= INF` with `-1`.
5. Return `matrix`.

## Complexity Analysis

- **Time Complexity:** `O(V^3)` due to the three nested loops each iterating `n` times.
- **Space Complexity:** `O(1)` auxiliary space if done in place, or `O(V^2)` to create a defensive copy of the matrix.

## Code

```java
class FloydWarshall {
    public static int[][] solve(int[][] matrix) {
        int n = matrix.length;
        int INF = 100000000;

        int[][] dist = new int[n][n];
        int i = 0;
        while (i < n) {
            int j = 0;
            while (j < n) {
                if (matrix[i][j] == -1 && i != j) {
                    dist[i][j] = INF;
                } else {
                    dist[i][j] = matrix[i][j];
                }
                j = j + 1;
            }
            i = i + 1;
        }

        int k = 0;
        while (k < n) {
            i = 0;
            while (i < n) {
                int j = 0;
                while (j < n) {
                    if (dist[i][k] != INF && dist[k][j] != INF) {
                        if (dist[i][k] + dist[k][j] < dist[i][j]) {
                            dist[i][j] = dist[i][k] + dist[k][j];
                        }
                    }
                    j = j + 1;
                }
                i = i + 1;
            }
            k = k + 1;
        }

        i = 0;
        while (i < n) {
            int j = 0;
            while (j < n) {
                if (dist[i][j] >= INF) {
                    dist[i][j] = -1;
                }
                j = j + 1;
            }
            i = i + 1;
        }

        return dist;
    }
}
```
