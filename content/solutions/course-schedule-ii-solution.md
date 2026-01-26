---
title: "Course Schedule II - Solution"
problemUrl: "/problems/course-schedule-ii/"
---

## Explanation

This is **topological sort** on a directed graph. Courses are nodes, prerequisites are edges. We need to find an ordering where all dependencies are satisfied.

**Kahn's Algorithm:**
1. Build adjacency list and compute in-degrees
2. Add all nodes with in-degree 0 to queue
3. Process queue: for each node, add to result and reduce neighbors' in-degrees
4. If result has all nodes, return it; otherwise cycle exists

## Code

```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] pre : prerequisites) {
            graph.get(pre[1]).add(pre[0]);
            inDegree[pre[0]]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }
        
        int[] result = new int[numCourses];
        int index = 0;
        
        while (!queue.isEmpty()) {
            int course = queue.poll();
            result[index++] = course;
            
            for (int next : graph.get(course)) {
                if (--inDegree[next] == 0) {
                    queue.offer(next);
                }
            }
        }
        
        return index == numCourses ? result : new int[0];
    }
}
```
