---
title: "Course Schedule II"
date: 2026-09-27T20:56:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Facebook"]
topics: ["Graph", "Topological Sort", "BFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CourseScheduleII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CourseScheduleII/engineering"
hints:
  - "This problem asks for an actual topological ordering of the courses."
  - "If the graph contains a directed cycle, it is impossible to complete all courses, so return an empty array."
  - "Use Kahn's algorithm: maintain in-degrees, use a queue for courses with 0 incoming edges, and record each processed course into the result array."
youtubeId: ""
solutionUrl: "/solutions/course-schedule-ii-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      numCourses = 2
      prerequisites = [[1, 0]]
    output: |
      [0, 1]
    explanation: "To take course 1 you must finish course 0. So the ordering is [0, 1]."
  - input: |
      numCourses = 4
      prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
    output: |
      [0, 1, 2, 3]
    explanation: "Course 0 must come before 1 and 2, which both must precede course 3."
  - input: |
      numCourses = 1
      prerequisites = []
    output: |
      [0]
    explanation: "There is only 1 course to take."
constraints:
  - "1 <= numCourses <= 2000"
  - "0 <= prerequisites.length <= numCourses * (numCourses - 1)"
  - "prerequisites[i].length == 2"
  - "0 <= prerequisites[i][0], prerequisites[i][1] < numCourses"
  - "All prerequisite pairs are distinct."
realWorld:
  - title: "Automated Microservice Deployment Sequencing"
    description: "Cloud deployment orchestrators sequence container startup orders based on service interconnection requirements."
  - title: "Student Degree Course Scheduler"
    description: "Academic advisement engines compute valid semester-by-semester course plans satisfying all required prerequisites."
  - title: "Complex Manufacturing Assembly Pipelines"
    description: "Industrial robotic assembly pipelines schedule subassembly steps in valid physical precedence orders."
---

<!-- All rights reserved to CSRGO DSA -->

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]` indicates that to take course `0` you have to first take course `1`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them (or the deterministic lexicographical order). If it is impossible to finish all courses, return an empty array `[]`.
