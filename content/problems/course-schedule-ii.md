---
title: "Course Schedule II"
date: 2024-01-29T00:00:00Z
difficulty: "Medium"
topics: ["Graph", "Topological Sort", "BFS", "DFS"]
companies: ["Amazon", "Facebook", "Microsoft"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/course-schedule-ii"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/course-schedule-ii"
hints:
  - "This is a classic topological sort problem."
  - "Build a graph and track in-degrees, then use Kahn's algorithm."
youtubeId: "Akt3glAwyfY"
solutionUrl: "/solutions/course-schedule-ii-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]"
    output: "[0,1,2,3] or [0,2,1,3]"
    explanation: "Course 0 must be taken first, then 1 or 2, then 3."
  - input: "numCourses = 1, prerequisites = []"
    output: "[0]"
    explanation: "Only one course with no prerequisites."
constraints:
  - "1 <= numCourses <= 2000"
  - "0 <= prerequisites.length <= numCourses × (numCourses - 1)"
  - "All the pairs in prerequisites are unique"
realWorld:
  - title: "Build Systems"
    description: "Determining compilation order with file dependencies."
  - title: "Package Managers"
    description: "Resolving installation order for software dependencies."
  - title: "Project Planning"
    description: "Scheduling tasks based on dependency constraints."
---

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.
