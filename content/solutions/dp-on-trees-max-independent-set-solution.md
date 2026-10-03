---
title: "DP on Trees (Max Independent Set) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/dp-on-trees-max-independent-set/"
weight: 56
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Maximum Weight Independent Set on a tree is a classic example of dynamic programming on trees (also known as tree DP).

Root the tree arbitrarily at node $0$. For each subtree rooted at node $u$, we define two states:
1. `dp[u][0]`: The maximum weight obtainable in the subtree of $u$ when node $u$ is **not included** in the independent set.
2. `dp[u][1]`: The maximum weight obtainable in the subtree of $u$ when node $u$ **is included** in the independent set.

### Recurrence Relations:
- If node $u$ is **included** (`dp[u][1]`):
  None of its direct children $v$ can be included because adjacent nodes cannot both be selected. Therefore, for every child $v$, we must take `dp[v][0]`:
  $$\text{dp}[u][1] = \text{weights}[u] + \sum_{v \in \text{children}(u)} \text{dp}[v][0]$$

- If node $u$ is **not included** (`dp[u][0]`):
  Each child $v$ can either be included or excluded independently, whichever yields a higher total for its subtree:
  $$\text{dp}[u][0] = \sum_{v \in \text{children}(u)} \max(\text{dp}[v][0], \text{dp}[v][1])$$

The overall answer is $\max(\text{dp}[0][0], \text{dp}[0][1])$.

### Step-by-Step Algorithm:
1. Handle base cases: if $n = 0$, return $0$. If $n = 1$, return $\text{weights}[0]$.
2. Build an adjacency list `tree` of size $n$ from `edges`.
3. Define a recursive helper function `dfs(u, parent)`:
   - Initialize `notIncluded = 0`.
   - Initialize `included = weights[u]`.
   - For each neighbor $v$ of $u$:
     - If $v \ne parent$:
       - Recursively call `dfs(v, u)` which returns a 2-element array `child = [childNotInc, childInc]`.
       - Add $\max(child[0], child[1])$ to `notIncluded`.
       - Add $child[0]$ to `included`.
   - Return new array `[notIncluded, included]`.
4. Call `dfs(0, -1)` on the root node and return $\max(res[0], res[1])$.

## Code

```java
public static int solve(int n, int[][] edges, int[] weights) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return weights[0];
    }

    List<List<Integer>> tree = new ArrayList<>();
    for (int i = 0; i < n; i = i + 1) {
        tree.add(new ArrayList<>());
    }

    for (int i = 0; i < edges.length; i = i + 1) {
        int u = edges[i][0];
        int v = edges[i][1];
        tree.get(u).add(v);
        tree.get(v).add(u);
    }

    int[] result = dfs(0, -1, tree, weights);
    return Math.max(result[0], result[1]);
}

private static int[] dfs(int u, int parent, List<List<Integer>> tree, int[] weights) {
    int notIncluded = 0;
    int included = weights[u];

    List<Integer> neighbors = tree.get(u);
    for (int i = 0; i < neighbors.size(); i = i + 1) {
        int v = neighbors.get(i);
        if (v != parent) {
            int[] child = dfs(v, u, tree, weights);
            notIncluded = notIncluded + Math.max(child[0], child[1]);
            included = included + child[0];
        }
    }

    return new int[]{notIncluded, included};
}
```
