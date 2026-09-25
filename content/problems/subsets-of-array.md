---
title: "Subsets of Array"
date: 2026-09-25T22:32:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Backtracking", "Recursion"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubsetsOfArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubsetsOfArray/engineering"

hints:
  - "An array of size n has 2^n subsets; iterate a counter i from 0 to (2^n - 1)."
  - "The binary representation of i determines subset inclusion: a 1-bit includes the element, while a 0-bit represents absence (printed as a dash '-')."

youtubeId: ""

solutionUrl: "/solutions/subsets-of-array-solution/"

timeComplexity: "O(n * 2^n)"
spaceComplexity: "O(n * 2^n)"

examples:
  - input: "arr = [10, 20, 30]"
    output: "-\t-\t-\n-\t-\t30\n-\t20\t-\n-\t20\t30\n10\t-\t-\n10\t-\t30\n10\t20\t-\n10\t20\t30\n"
    explanation: "All 2^3 = 8 subsets formatted in binary order from 000 to 111 with excluded items displayed as dashes."
  - input: "arr = [1, 2]"
    output: "-\t-\n-\t2\n1\t-\n1\t2\n"
    explanation: "Subsets for [1, 2]: empty, [2], [1], and [1, 2]."

constraints:
  - "0 <= arr.length <= 15"
  - "-10^9 <= arr[i] <= 10^9"
  - "Each subset must be printed on a separate line with elements/dashes separated by a tab (\\t)."

realWorld:
  - title: "Feature Flag Combinatorial Testing"
    description: "Generating all 2^n on/off configuration permutations across application feature flags for exhaustive integration testing."
  - title: "Knapsack Power Set Exploration"
    description: "Evaluating all candidate item subsets in 0/1 knapsack and combinatorial optimization benchmarks."
  - title: "Access Control Group Permutations"
    description: "Generating role privilege power sets to audit fine-grained IAM policy combinations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, generate and return all $2^n$ **subsets** (power set) of the array in standard binary order from $0$ to $2^n - 1$. Each subset should occupy its own line, with elements or dashes (`-` for omitted elements) separated by a tab (`\t`).

### Input Format
- An array of integers `arr`.

### Output Format
- A string representing all subsets, one per line, with tab-separated elements and dashes.
