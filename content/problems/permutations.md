---
title: "Permutations"
date: 2024-01-18T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Backtracking"]
companies: ["Amazon", "Microsoft", "LinkedIn"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/permutations"
hints:
  - "Use backtracking to generate all orderings."
  - "Track which elements have been used in the current permutation."
youtubeId: "s7AvT7cGdSo"
solutionUrl: "/solutions/permutations-solution/"
timeComplexity: "O(n! × n)"
spaceComplexity: "O(n)"
examples:
  - input: "nums = [1,2,3]"
    output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
    explanation: "All 6 possible orderings of 3 elements."
  - input: "nums = [0,1]"
    output: "[[0,1],[1,0]]"
    explanation: "Two possible orderings for 2 elements."
constraints:
  - "1 <= nums.length <= 6"
  - "-10 <= nums[i] <= 10"
  - "All the integers of nums are unique"
realWorld:
  - title: "Route Planning"
    description: "Generating all possible orderings of destinations to visit."
  - title: "Task Scheduling"
    description: "Finding all possible execution orders for parallel tasks."
  - title: "Password Generation"
    description: "Creating all possible arrangements of characters."
---

Given an array `nums` of **distinct** integers, return all the possible **permutations**. You can return the answer in **any order**.
