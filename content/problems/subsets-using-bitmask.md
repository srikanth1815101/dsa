---
title: "Subsets using Bitmask"
date: 2026-10-01T02:12:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Bit Manipulation", "Backtracking"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubsetsUsingBitmask/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubsetsUsingBitmask/engineering"

hints:
  - "An array of size n has 2^n total subsets; each subset corresponds to an integer from 0 to (1 << n) - 1."
  - "For each bitmask, inspect bit j using ((mask >> j) & 1); if set, include nums[j] in the current subset."

youtubeId: ""

solutionUrl: "/solutions/subsets-using-bitmask-solution/"

timeComplexity: "O(n * 2^n)"
spaceComplexity: "O(n * 2^n)"

examples:
  - input: "nums = [1,2,3]"
    output: "** `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`"
    explanation: "Result is ** `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`."
  - input: "nums = [0]"
    output: "** `[[],[0]]`"
    explanation: "Result is ** `[[],[0]]`."

constraints:
  - "0 <= nums.length <= 10"
  - "-10 <= nums[i] <= 10"
  - "All the numbers of `nums` are **unique**."

realWorld:
  - title: "Feature Flag Configuration Testing"
    description: "Generating all combinatorial toggle configurations to run exhaustive regression testing on software microservices."
  - title: "Hardware Circuit Bus Multiplexing"
    description: "Testing all possible high/low pin combinations on an embedded peripheral control bus."
  - title: "Security Access Control Permutations"
    description: "Enumerating user privilege subsets to audit role-based access control permission matrices."
weight: 73
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` of **unique** elements, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in any order. In bitmask generation, subsets correspond to integers from `0` to `2^n - 1`.
