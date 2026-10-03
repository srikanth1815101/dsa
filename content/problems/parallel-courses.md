---
title: "Parallel Courses"
date: 2026-10-01T02:04:00+05:30
difficulty: "Medium"
topics: ["Graph", "Topological Sort", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ParallelCourses/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ParallelCourses/engineering"

hints:
  - "Model the courses as a directed acyclic graph (DAG) and calculate the in-degree of each course."
  - "Use Kahn's algorithm (BFS topological sort) level by level; each level represents one semester, and check if all courses are taken."

youtubeId: ""

solutionUrl: "/solutions/parallel-courses-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "n = 3`, `relations = [[1,3],[2,3]]"
    output: "** `2` **"
    explanation: "** In the first semester, you can take courses 1 and 2. In the second semester, you can take course 3."
  - input: "n = 3`, `relations = [[1,2],[2,3],[3,1]]"
    output: "** `-1` **"
    explanation: "** No courses can be taken because they form a cyclic dependency loop."

constraints:
  - "1 <= n <= 5000"
  - "0 <= relations.length <= 5000"
  - "relations[i].length == 2"
  - "1 <= prevCourse_i, nextCourse_i <= n"

realWorld:
  - title: "Build System Dependency Parallelization"
    description: "Determining the minimum compilation steps required to build a software project with parallel compile workers."
  - title: "CI/CD Pipeline Stage Grouping"
    description: "Calculating the minimum execution stages needed to run automated integration test suites with prerequisites."
  - title: "Instruction Scheduling in Super-Scalar CPUs"
    description: "Scheduling independent machine instructions across parallel execution units to minimize clock cycles."
weight: 65
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer `n`, which denotes that there are `n` courses labeled from `1` to `n`. You are also given an array `relations` where `relations[i] = [prevCourse_i, nextCourse_i]`, representing a prerequisite relationship between course `prevCourse_i` and course `nextCourse_i`: course `prevCourse_i` must be taken before course `nextCourse_i`.

In one semester, you can take any number of courses as long as you have taken all the prerequisites in the previous semesters for the courses you are taking.

Return the **minimum number of semesters** needed to take all courses. If there is no way to take all the courses because of a cyclic dependency, return `-1`.
