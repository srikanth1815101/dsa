---
title: "Course Schedule - Solution"
problemUrl: "/problems/course-schedule/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We can represent the courses and prerequisites as a directed graph where an edge `b -> a` exists if course `b` is a prerequisite for course `a`. The problem of determining whether all courses can be finished is equivalent to detecting whether the directed graph contains a cycle.

If the graph contains no cycles, a topological order exists and all courses can be finished.

We can apply **Kahn's Algorithm**:
1. Build an adjacency list where each edge directed from `b` to `a` means `b` points to `a`.
2. Compute the `inDegree` of every course `a` (number of prerequisite courses required).
3. Enqueue all courses with `inDegree == 0`.
4. Process each course from the queue, decrementing the in-degrees of all courses that depend on it. If any dependent course reaches `inDegree == 0`, add it to the queue.
5. Count the total number of courses popped from the queue. If this count equals `numCourses`, then no cycles exist and all courses can be completed. Otherwise, a cycle exists.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `graph` of size `numCourses` and an integer array `inDegree` of size `numCourses`.
2. For each prerequisite pair `[course, prereq]`, add `course` to `graph.get(prereq)` and increment `inDegree[course] = inDegree[course] + 1`.
3. Add all courses with `inDegree[i] == 0` to a queue.
4. Maintain a count of visited courses initialized to `0`.
5. While the queue is not empty:
   - Poll a course `curr`.
   - Increment `count = count + 1`.
   - For each dependent course `nbr` in `graph.get(curr)`:
     - Decrement `inDegree[nbr] = inDegree[nbr] - 1`.
     - If `inDegree[nbr] == 0`, enqueue `nbr`.
6. Return `count == numCourses`.

## Complexity Analysis

- **Time Complexity:** `O(V + E)` where `V` is `numCourses` and `E` is the number of prerequisite pairs.
- **Space Complexity:** `O(V + E)` to store the adjacency list, in-degree array, and queue.

## Code

```java
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class CourseSchedule {
    public static boolean solve(int numCourses, int[][] prerequisites) {
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

        Queue<Integer> queue = new ArrayDeque<>();
        i = 0;
        while (i < numCourses) {
            if (inDegree[i] == 0) {
                queue.add(i);
            }
            i = i + 1;
        }

        int count = 0;
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            count = count + 1;

            List<Integer> neighbors = graph.get(curr);
            int j = 0;
            while (j < neighbors.size()) {
                int neighbor = neighbors.get(j);
                inDegree[neighbor] = inDegree[neighbor] - 1;
                if (inDegree[neighbor] == 0) {
                    queue.add(neighbor);
                }
                j = j + 1;
            }
        }

        return count == numCourses;
    }
}
```
