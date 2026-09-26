---
title: "Subsets"
date: 2026-09-26T21:01:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Backtracking", "Bit Manipulation"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/Subsets/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/Subsets/engineering"

hints:
  - "At each element index, decide whether to include or exclude nums[idx] in the current subset."
  - "Alternatively, use a loop from start to n - 1: add nums[i], recurse with i + 1, and backtrack by removing the last element."

youtubeId: ""

solutionUrl: "/solutions/subsets-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 2, 3]"
    output: "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]"
    explanation: "All 2^3 = 8 subsets formed from elements 1, 2, and 3."
  - input: "nums = [0]"
    output: "[[], [0]]"
    explanation: "Two subsets for single element array."

constraints:
  - "1 <= nums.length <= 10"
  - "-10 <= nums[i] <= 10"
  - "All the numbers of nums are unique."

realWorld:
  - title: "Database Query Filtering Condition Powersets"
    description: "Generating index combinations for multi-attribute faceted search queries."
  - title: "Access Control Role Permission Permutations"
    description: "Evaluating privilege set combinations during policy authorization verification."
  - title: "A/B Testing Feature Flag Variants"
    description: "Enumerating active feature toggles across microservice deployment cohorts."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
