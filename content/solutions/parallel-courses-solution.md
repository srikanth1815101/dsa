---
title: "Parallel Courses - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/parallel-courses/"
weight: 65
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum number of semesters needed to complete all `n` courses, where multiple courses can be taken concurrently in the same semester if their prerequisites are already satisfied. If a cycle exists among course prerequisites, it is impossible to finish all courses, so we must return `-1`.

This can be modeled as finding the length of the longest path in a Directed Acyclic Graph (DAG) using **Kahn's Algorithm (Topological Sort with BFS)**:
1. Build an adjacency list where each directed edge `u -> v` indicates that course `u` is a prerequisite for course `v`.
2. Maintain an `inDegree` array of size `n + 1` tracking how many prerequisites each course has.
3. Courses with an in-degree of `0` have no remaining prerequisites and can be taken in the first semester. Add all such courses to a queue.
4. Process the queue level-by-level (semester-by-semester):
   - In each semester, take all courses currently in the queue.
   - For each completed course, decrement the in-degree of its successor courses.
   - If any successor's in-degree drops to `0`, it becomes available to take in the next semester, so add it to the queue.
5. Keep a counter of total courses taken. If the total courses taken equals `n`, return the semester count. Otherwise, a cycle prevents taking all courses, so return `-1`.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `n + 1` and an integer array `inDegree` of size `n + 1`.
2. Populate `adj` and increment `inDegree[next]` for every pair `[prev, next]` in `relations`.
3. Add all courses `i` from `1` to `n` with `inDegree[i] == 0` into a `Queue<Integer>`.
4. Initialize `semesters = 0` and `takenCount = 0`.
5. While the queue is not empty:
   - Increment `semesters` by 1.
   - Record the current queue size `levelSize`.
   - Loop `levelSize` times:
     - Dequeue course `u`.
     - Increment `takenCount` by 1.
     - For each neighbor `v` of `u`, decrement `inDegree[v]` by 1. If `inDegree[v] == 0`, add `v` to the queue.
6. If `takenCount == n`, return `semesters`. Otherwise, return `-1`.

## Code

```java
public static int solve(int n, int[][] relations) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i <= n; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    int[] inDegree = new int[n + 1];
    for (int i = 0; i < relations.length; i = i + 1) {
        int prev = relations[i][0];
        int next = relations[i][1];
        adj.get(prev).add(next);
        inDegree[next] = inDegree[next] + 1;
    }

    Queue<Integer> queue = new ArrayDeque<>();
    for (int i = 1; i <= n; i = i + 1) {
        if (inDegree[i] == 0) {
            queue.add(i);
        }
    }

    int semesters = 0;
    int takenCount = 0;

    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        semesters = semesters + 1;

        for (int i = 0; i < levelSize; i = i + 1) {
            int u = queue.poll();
            takenCount = takenCount + 1;

            List<Integer> neighbors = adj.get(u);
            for (int j = 0; j < neighbors.size(); j = j + 1) {
                int v = neighbors.get(j);
                inDegree[v] = inDegree[v] - 1;
                if (inDegree[v] == 0) {
                    queue.add(v);
                }
            }
        }
    }

    if (takenCount == n) {
        return semesters;
    }

    return -1;
}
```
