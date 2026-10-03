---
title: "Flatten Multilevel Doubly Linked List - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/flatten-multilevel-doubly-linked-list/"
weight: 21
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We are given a multilevel doubly linked list where nodes contain `next`, `prev`, and an optional `child` pointer to another doubly linked list. The objective is to flatten the structure into a single-level doubly linked list where each child list is spliced immediately after its parent and before the parent's original next node.



This problem naturally follows Depth-First Search (DFS) traversal or a stack-based traversal:
1. When traversing a node, if it has a child pointer, we must process the entire child branch before continuing with the current node's `next` sibling.
2. If we use a stack or recursive DFS, whenever a child pointer is encountered, the child node is processed first, followed by the original `next` pointer.
3. This creates a pre-order traversal sequence that accurately merges multilevel branches into a continuous linear chain.

### Step-by-Step Algorithm:
1. Check if the input nodes array is empty. If so, return an empty array.
2. Initialize a result list to record the flattened order of values.
3. Use a boolean visited array to prevent reprocessing nodes and maintain proper level order.
4. Implement a DFS helper function `dfs(nodeIndex)`:
   - If `nodeIndex` is out of bounds or already visited, return.
   - Mark `nodeIndex` as visited and append its value `nodes[nodeIndex][0]` to the result list.
   - If the current node has a valid child index (`nodes[nodeIndex][1] != -1`), recursively invoke `dfs` on the child index.
   - Proceed to the next consecutive sibling index if it belongs to the current level until the level is fully traversed.
5. Convert the result list to a primitive integer array and return it.

## Code

```java
public static int[] solve(int[][] nodes) {
    if (nodes == null || nodes.length == 0) {
        return new int[0];
    }

    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[nodes.length];
    dfs(0, nodes, visited, result);

    int[] ans = new int[result.size()];
    for (int i = 0; i < result.size(); i = i + 1) {
        ans[i] = result.get(i);
    }
    return ans;
}

private static void dfs(int idx, int[][] nodes, boolean[] visited, List<Integer> result) {
    if (idx < 0 || idx >= nodes.length || visited[idx]) {
        return;
    }

    visited[idx] = true;
    result.add(nodes[idx][0]);

    int childIdx = nodes[idx][1];
    if (childIdx != -1) {
        dfs(childIdx, nodes, visited, result);
    }

    int nextIdx = idx + 1;
    if (nextIdx < nodes.length && !visited[nextIdx] && isSibling(idx, nextIdx, nodes)) {
        dfs(nextIdx, nodes, visited, result);
    }
}

private static boolean isSibling(int curr, int next, int[][] nodes) {
    for (int i = 0; i < nodes.length; i = i + 1) {
        if (nodes[i][1] == next) {
            return false;
        }
    }
    return true;
}
```
