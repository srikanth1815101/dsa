---
title: "Number of Provinces - Solution"
problemUrl: "/problems/number-of-provinces/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the number of provinces corresponds directly to counting the connected components in an undirected graph.

Using Depth-First Search (DFS):
1. Maintain a boolean array `visited` of size `n` to track visited cities.
2. Iterate through each city from `0` to `n - 1`.
3. If city `i` has not been visited, we have discovered a new connected component (province):
   - Increment `provinces = provinces + 1`.
   - Initiate a DFS traversal from city `i` to visit all cities reachable directly or indirectly through `isConnected`.
4. Return `provinces`.

### Step-by-Step Algorithm:
1. Check if `isConnected` is empty or null; if so, return `0`.
2. Let `n = isConnected.length`. Initialize `visited = new boolean[n]` and `provinces = 0`.
3. For each city `i` from `0` to `n - 1`:
   - If `!visited[i]`:
     - Increment `provinces = provinces + 1`.
     - Call helper `dfs(isConnected, visited, i)`.
4. Inside `dfs(isConnected, visited, city)`:
   - Mark `visited[city] = true`.
   - For each neighbor `next` from `0` to `n - 1`:
     - If `isConnected[city][next] == 1 && !visited[next]`:
       - Recursively call `dfs(isConnected, visited, next)`.
5. Return `provinces`.

## Code

```java
public static int solve(int[][] isConnected) {
    if (isConnected == null || isConnected.length == 0) {
        return 0;
    }

    int n = isConnected.length;
    boolean[] visited = new boolean[n];
    int provinces = 0;

    for (int i = 0; i < n; i = i + 1) {
        if (!visited[i]) {
            provinces = provinces + 1;
            dfs(isConnected, visited, i);
        }
    }

    return provinces;
}

private static void dfs(int[][] isConnected, boolean[] visited, int city) {
    visited[city] = true;
    for (int next = 0; next < isConnected.length; next = next + 1) {
        if (isConnected[city][next] == 1 && !visited[next]) {
            dfs(isConnected, visited, next);
        }
    }
}
```
