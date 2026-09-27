---
title: "Number of Provinces - Solution"
problemUrl: "/problems/number-of-provinces/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the number of connected components in an undirected graph represented by an adjacency matrix.

We can solve this using Depth-First Search (DFS):
1. Maintain a `visited` boolean array of size `n`.
2. Initialize `provinces = 0`.
3. Iterate through each city `i` from `0` to `n - 1`:
   - If city `i` has not been visited:
     - Increment `provinces = provinces + 1`.
     - Run a DFS starting from `i` to visit all cities connected to `i` directly or indirectly.
4. During DFS from city `curr`:
   - Mark `visited[curr] = true`.
   - For every other city `j` from `0` to `n - 1`:
     - If `isConnected[curr][j] == 1` and `!visited[j]`:
       - Recursively invoke DFS on `j`.
5. Return `provinces`.

### Step-by-Step Algorithm:
1. Let `n = isConnected.length`.
2. Create boolean array `visited` of size `n`.
3. Set `count = 0`.
4. Loop `i` from `0` to `n - 1`:
   - If `!visited[i]`:
     - `count = count + 1`.
     - Call `dfs(i, isConnected, visited, n)`.
5. In `dfs(curr, isConnected, visited, n)`:
   - Mark `visited[curr] = true`.
   - Loop `j` from `0` to `n - 1`:
     - If `isConnected[curr][j] == 1` and `!visited[j]`:
       - Recurse `dfs(j, isConnected, visited, n)`.
6. Return `count`.

## Complexity Analysis

- **Time Complexity:** `O(n^2)` because we examine every cell of the `n x n` adjacency matrix.
- **Space Complexity:** `O(n)` to store the `visited` array and the recursion call stack.

## Code

```java
class NumberOfProvinces {
    private static void dfs(int curr, int[][] isConnected, boolean[] visited, int n) {
        visited[curr] = true;
        int j = 0;
        while (j < n) {
            if (isConnected[curr][j] == 1 && !visited[j]) {
                dfs(j, isConnected, visited, n);
            }
            j = j + 1;
        }
    }

    public static int solve(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int count = 0;

        int i = 0;
        while (i < n) {
            if (!visited[i]) {
                count = count + 1;
                dfs(i, isConnected, visited, n);
            }
            i = i + 1;
        }

        return count;
    }
}
```
