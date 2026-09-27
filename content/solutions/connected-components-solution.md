---
title: "Connected Components - Solution"
problemUrl: "/problems/connected-components/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A connected component of an undirected graph is a maximal set of vertices such that every pair of vertices in the set is connected by a path.

1. Construct an adjacency list representation from `edges`.
2. Maintain a boolean array `visited` of size `vtces`, initially all `false`.
3. Iterate through every vertex `i` from `0` to `vtces - 1`:
   - If vertex `i` is not visited, it marks the discovery of a new connected component.
   - Initialize a new component list `comp`.
   - Run DFS from vertex `i`, adding every newly reached vertex to `comp` and marking it visited.
   - Sort `comp` in ascending order and append it to the overall result list `components`.
4. Because the outer loop scans vertices in order from `0` to `vtces - 1`, the components are naturally ordered by their smallest vertex.

The time complexity is $O(V + E)$ since each vertex and edge is processed during DFS. The space complexity is $O(V + E)$ for the adjacency list and recursion stack.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. For each edge `[u, v, wt]`, add `v` to `adj.get(u)` and `u` to `adj.get(v)`.
3. Create a boolean array `visited` of size `vtces` and a master list `components`.
4. Loop `v` from `0` to `vtces - 1`:
   - If `!visited[v]`:
     - Create a list `comp`.
     - Execute `dfs(adj, v, visited, comp)`.
     - Sort `comp` in ascending order.
     - Add `comp` to `components`.
5. Return `components`.

## Code

```java
public static List<List<Integer>> solve(int vtces, int[][] edges) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < vtces; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    if (edges != null) {
        for (int i = 0; i < edges.length; i = i + 1) {
            int u = edges[i][0];
            int v = edges[i][1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
    }

    List<List<Integer>> components = new ArrayList<>();
    boolean[] visited = new boolean[vtces];

    for (int i = 0; i < vtces; i = i + 1) {
        if (!visited[i]) {
            List<Integer> comp = new ArrayList<>();
            dfs(adj, i, visited, comp);
            Collections.sort(comp);
            components.add(comp);
        }
    }

    return components;
}

private static void dfs(List<List<Integer>> adj, int curr, boolean[] visited, List<Integer> comp) {
    visited[curr] = true;
    comp.add(curr);

    for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
        int nbr = adj.get(curr).get(i);
        if (!visited[nbr]) {
            dfs(adj, nbr, visited, comp);
        }
    }
}
```
