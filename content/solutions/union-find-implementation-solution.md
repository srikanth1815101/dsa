---
title: "Union Find Implementation - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/union-find-implementation/"
weight: 87
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Disjoint Set Union (DSU) data structure maintains a collection of disjoint sets with two primary operations:
1. `find(i)`: Determine the representative (root) of the set containing element $i$.
2. `union(u, v)`: Merge the set containing element $u$ with the set containing element $v$.

To achieve optimal near-constant time per operation, two key optimizations are applied:
- **Path Compression:** During a `find` call, flatten the tree structure by directly pointing every visited node to the root.
- **Union by Rank:** Always attach the shorter tree under the root of the taller tree to minimize tree height.

Connected queries `connected(u, v)` evaluate whether `find(u) == find(v)`.

### Step-by-Step Algorithm:
1. Validate input: if `n <= 0 || operations == null || operations.length == 0`, return `new boolean[0]`.
2. Initialize array `parent` of size `n` with `parent[i] = i`, and array `rank` of size `n` with all zeros.
3. Count the number of type `2` queries to initialize the result array `results`.
4. Define iterative `find(i)` with path compression:
   - Traverse to locate the root.
   - Retraverse to repoint intermediate nodes directly to the root.
5. Define `union(u, v)`:
   - Find roots `rootU` and `rootV`.
   - If `rootU != rootV`:
     - If `rank[rootU] < rank[rootV]`, set `parent[rootU] = rootV`.
     - Else if `rank[rootU] > rank[rootV]`, set `parent[rootV] = rootU`.
     - Else set `parent[rootV] = rootU` and `rank[rootU] = rank[rootU] + 1`.
6. For each operation:
   - If type is 1, call `union(u, v)`.
   - If type is 2, record `find(u) == find(v)` into `results`.
7. Return `results`.

## Code

```java
private static int find(int[] parent, int i) {
    int root = i;
    while (root != parent[root]) {
        root = parent[root];
    }
    int curr = i;
    while (curr != root) {
        int nxt = parent[curr];
        parent[curr] = root;
        curr = nxt;
    }
    return root;
}

private static void union(int[] parent, int[] rank, int u, int v) {
    int rootU = find(parent, u);
    int rootV = find(parent, v);
    if (rootU != rootV) {
        if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else {
            parent[rootV] = rootU;
            rank[rootU] = rank[rootU] + 1;
        }
    }
}

public static boolean[] solve(int n, int[][] operations) {
    if (n <= 0 || operations == null || operations.length == 0) {
        return new boolean[0];
    }

    int[] parent = new int[n];
    int[] rank = new int[n];
    for (int i = 0; i < n; i = i + 1) {
        parent[i] = i;
    }

    int queryCount = 0;
    for (int i = 0; i < operations.length; i = i + 1) {
        if (operations[i][0] == 2) {
            queryCount = queryCount + 1;
        }
    }

    boolean[] results = new boolean[queryCount];
    int resultIndex = 0;

    for (int i = 0; i < operations.length; i = i + 1) {
        int type = operations[i][0];
        int u = operations[i][1];
        int v = operations[i][2];

        if (type == 1) {
            union(parent, rank, u, v);
        } else if (type == 2) {
            results[resultIndex] = (find(parent, u) == find(parent, v));
            resultIndex = resultIndex + 1;
        }
    }

    return results;
}
```
