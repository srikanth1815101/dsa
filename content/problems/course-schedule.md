---
title: "Course Schedule"
date: 2026-09-27T20:55:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Facebook"]
topics: ["Graph", "Topological Sort", "BFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CourseSchedule/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CourseSchedule/engineering"
hints:
  - "This problem can be modeled as detecting a cycle in a directed graph."
  - "If there is a cycle in the prerequisite dependencies, it is impossible to finish all courses."
  - "Use Kahn's algorithm (BFS with in-degrees): if the number of visited nodes equals numCourses, all courses can be finished."
youtubeId: ""
solutionUrl: "/solutions/course-schedule-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      numCourses = 2
      prerequisites = [[1, 0]]
    output: |
      true
    explanation: "There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible."
  - input: |
      numCourses = 2
      prerequisites = [[1, 0], [0, 1]]
    output: |
      false
    explanation: "There are 2 courses to take. Course 1 requires 0 and course 0 requires 1, forming a dependency cycle. So it is impossible."
constraints:
  - "1 <= numCourses <= 2000"
  - "0 <= prerequisites.length <= 5000"
  - "prerequisites[i].length == 2"
  - "0 <= prerequisites[i][0], prerequisites[i][1] < numCourses"
  - title: "Academic Curriculum Prerequisite Validation"
    description: "University enrollment platforms verify degree roadmaps to prevent circular prerequisite course dependencies."
  - title: "Package Management Dependency Tree Resolution"
    description: "Package managers like npm, pip, and apt detect circular dependency graphs during package resolution."
  - title: "Spreadsheet Formula Cycle Detection"
    description: "Spreadsheet calculation engines evaluate cell reference dependency graphs to flag circular reference errors."
---
<!-- All rights reserved to CSRGO DSA -->

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you **must** take course `b` first if you want to take course `a`.

For example, the pair `[0, 1]` indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.
