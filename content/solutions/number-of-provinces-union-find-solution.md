---
title: "Number of Provinces (Union Find) - Solution"
problemUrl: "/problems/number-of-provinces-union-find/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the number of provinces corresponds directly to counting the connected components in an undirected graph using Disjoint Set Union (DSU).

Using Disjoint Set Union (DSU):
1. Initially, each of the $n$ cities is considered its own province, so `count = n`.
2. Inspect every pair of cities $(i, j)$ with $i < j$.
3. If `isConnected[i][j] == 1`, perform a `union(i, j)`.
4. If $i$ and $j$ were in distinct components, merge them and decrement `count = count - 1`. If they were already in the same component, `count` remains unchanged.
5. After inspecting all pairs, return `count`.

### Step-by-Step Algorithm:
1. Validate input: if `isConnected == null || isConnected.length == 0`, return `0`.
2. Let $n = \text{isConnected.length}$.
3. Initialize `parent` array of size $n$ where `parent[i] = i`.
4. Initialize `count = n`.
5. Define helper `find(parent, i)` with path compression.
6. Iterate $i$ from $0$ to $n - 1$:
   - Iterate $j$ from $i + 1$ to $n - 1$:
     - If `isConnected[i][j] == 1`:
       - Find `rootI = find(parent, i)` and `rootJ = find(parent, j)`.
       - If `rootI != rootJ`:
         - Set `parent[rootI] = rootJ`.
         - Decrement `count = count - 1`.
7. Return `count`.

## Code

```java
public static int solve(int[][] isConnected) {
    if (isConnected == null || isConnected.length == 0) {
        return 0;
    }

    int n = isConnected.length;
    int[] parent = new int[n];
    for (int i = 0; i < n; i = i + 1) {
        parent[i] = i;
    }

    int count = n;
    for (int i = 0; i < n; i = i + 1) {
        for (int j = i + 1; j < n; j = j + 1) {
            if (isConnected[i][j] == 1) {
                int rootI = find(parent, i);
                int rootJ = find(parent, j);
                if (rootI != rootJ) {
                    parent[rootI] = rootJ;
                    count = count - 1;
                }
            }
        }
    }

    return count;
}

private static int find(int[] parent, int i) {
    if (parent[i] == i) {
        return i;
    }
    parent[i] = find(parent, parent[i]);
    return parent[i];
}
```
