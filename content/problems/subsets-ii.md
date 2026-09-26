---
title: "Subsets II"
date: 2026-09-26T21:02:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Backtracking", "Hashing"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubsetsII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubsetsII/engineering"

hints:
  - "Sort the input array first so that duplicate values are placed adjacent to each other."
  - "During the recursion loop, skip identical adjacent elements when i > start (if nums[i] == nums[i - 1])."

youtubeId: ""

solutionUrl: "/solutions/subsets-ii-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 2, 2]"
    output: "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]"
    explanation: "All unique subsets without duplicate combinations."
  - input: "nums = [0]"
    output: "[[], [0]]"
    explanation: "Two subsets for single element array."

constraints:
  - "1 <= nums.length <= 10"
  - "-10 <= nums[i] <= 10"

realWorld:
  - title: "E-Commerce Product Bundling with Multiples"
    description: "Generating distinct catalog bundle combinations containing identical item SKUs."
  - title: "Financial Portfolio Weighting Permutations"
    description: "Forming unique asset allocation packages when holding multiple identical bond units."
  - title: "Genomic Multi-Copy Allele Clustering"
    description: "Identifying distinct homozygous and heterozygous genetic segment groupings."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` that may contain duplicate elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
