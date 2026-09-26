---
title: "Combination Sum II"
date: 2026-09-26T21:04:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Backtracking", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CombinationSumII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CombinationSumII/engineering"

hints:
  - "Sort the candidates array first to handle duplicate elements and allow early termination."
  - "Skip duplicate elements at the same tree depth: if i > start && candidates[i] == candidates[i - 1], continue."
  - "Since each number may only be used once, advance the start index to i + 1 for subsequent recursive calls."

youtubeId: ""

solutionUrl: "/solutions/combination-sum-ii-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "candidates = [10, 1, 2, 7, 6, 1, 5], target = 8"
    output: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]"
    explanation: "All unique combinations summing to 8 where each element is used at most once."
  - input: "candidates = [2, 5, 2, 1, 2], target = 5"
    output: "[[1, 2, 2], [5]]"
    explanation: "Unique combinations without duplicating the set [1, 2, 2]."

constraints:
  - "1 <= candidates.length <= 100"
  - "1 <= candidates[i] <= 50"
  - "1 <= target <= 30"

realWorld:
  - title: "Fixed Resource Allocation / Single-Use Coupons"
    description: "Combining unique non-reusable promotional discount credits to cover an exact invoice balance."
  - title: "Payload Assembly from Limited Part Inventory"
    description: "Selecting distinct physical components from warehouse bins to achieve an exact target balance weight."
  - title: "Zero-Sum Financial Audit Balancing"
    description: "Identifying disjoint ledger debit entries that reconcile against an unassigned credit total."
---
<!-- All rights reserved to CSRGO DSA -->

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find and return all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note**: The solution set must not contain duplicate combinations.
