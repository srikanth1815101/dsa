---
title: "Target Sum Subsets"
date: 2026-09-26T20:58:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Backtracking", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TargetSumSubsets/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TargetSumSubsets/engineering"

hints:
  - "At each element, make two recursive choices: include the element into current subset sum, or exclude it."
  - "The base case checks whether current sum matches target once all array elements have been considered."

youtubeId: ""

solutionUrl: "/solutions/target-sum-subsets-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 40, 50], target = 60"
    output: "[[10, 20, 30], [10, 50], [20, 40]]"
    explanation: "Subsets summing to 60 using elements in index order."
  - input: "arr = [1, 2, 3], target = 7"
    output: "[]"
    explanation: "No subset sums to 7."

constraints:
  - "1 <= arr.length <= 15"
  - "1 <= arr[i] <= 1000"
  - "1 <= target <= 5000"

realWorld:
  - title: "Financial Transaction Reconciliation"
    description: "Finding combinations of unsettled invoices whose sum matches an aggregate payment."
  - title: "Cargo Loading Bin Capacity Matching"
    description: "Selecting freight packages that saturate cargo container maximum payload limits."
  - title: "Cryptographic Subset-Sum Knapsacks"
    description: "Analyzing hardness of additive subset-sum lattice-based cryptosystems."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of positive integers `arr` and a target value `target`, find and return all unique subsets of `arr` whose elements sum up to `target`.

Each element may be chosen at most once per subset.
