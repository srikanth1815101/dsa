---
title: "Course Schedule II - Solution"
problemUrl: "/problems/course-schedule-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The goal is to find a linear topological ordering of courses such that every prerequisite course is completed before any course that depends on it. If there is a cycle, no valid order exists and we must return an empty array.

We use **Kahn's Algorithm**:
1. Represent each course requirement as an edge `bi -> ai`.
2. Compute the `inDegree` of every course `ai` (the number of incoming edges).
3. Insert all courses with an in-degree of `0` into a queue or min-priority queue.
4. Process each node one by one:
   - Append the node to the result order array.
   - Decrement the in-degree of all neighbors.
   - When a neighbor's in-degree becomes `0`, add it to the queue.
5. If the total number of processed courses equals `numCourses`, return the result array. Otherwise, a cycle exists, so return an empty array `new int[]{}`.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `graph` of size `numCourses` and an array `inDegree` of size `numCourses`.
2. For each prerequisite pair `[a, b]`:
   - Add `a` to `graph.get(b)`.
   - Increment `inDegree[a] = inDegree[a] + 1`.
3. Add all vertices with `inDegree[i] == 0` to a priority queue `pq`.
4. Initialize `result` array of size `numCourses` and pointer `idx = 0`.
5. While `pq` is not empty:
   - Poll `curr` from `pq`.
   - Store `result[idx] = curr`.
   - Increment `idx = idx + 1`.
   - For each neighbor `nbr` of `curr`:
     - Decrement `inDegree[nbr] = inDegree[nbr] - 1`.
     - If `inDegree[nbr] == 0`, add `nbr` to `pq`.
6. If `idx == numCourses`, return `result`. Otherwise, return `new int[]{}`.

## Complexity Analysis

- **Time Complexity:** `O(V + E)` where `V` is `numCourses` and `E` is the number of prerequisite edges.
- **Space Complexity:** `O(V + E)` to store the adjacency list, in-degree array, and priority queue.

## Code

```java
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

class CourseScheduleII {
    public static int[] solve(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int i = 0;
        while (i < numCourses) {
            graph.add(new ArrayList<>());
            i = i + 1;
        }

        int[] inDegree = new int[numCourses];
        i = 0;
        while (i < prerequisites.length) {
            int course = prerequisites[i][0];
            int prereq = prerequisites[i][1];
            graph.get(prereq).add(course);
            inDegree[course] = inDegree[course] + 1;
            i = i + 1;
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        i = 0;
        while (i < numCourses) {
            if (inDegree[i] == 0) {
                pq.add(i);
            }
            i = i + 1;
        }

        int[] result = new int[numCourses];
        int idx = 0;

        while (!pq.isEmpty()) {
            int curr = pq.poll();
            result[idx] = curr;
            idx = idx + 1;

            List<Integer> neighbors = graph.get(curr);
            int j = 0;
            while (j < neighbors.size()) {
                int neighbor = neighbors.get(j);
                inDegree[neighbor] = inDegree[neighbor] - 1;
                if (inDegree[neighbor] == 0) {
                    pq.add(neighbor);
                }
                j = j + 1;
            }
        }

        if (idx == numCourses) {
            return result;
        }
        return new int[]{};
    }
}
```
