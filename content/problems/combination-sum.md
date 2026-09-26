---
title: "Combination Sum"
date: 2026-09-26T21:03:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Backtracking", "Recursion"]
companies: ["Amazon", "Google", "Uber"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CombinationSum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CombinationSum/engineering"

hints:
  - "Since elements may be reused an unlimited number of times, do not increment the start index when making the recursive call on the same element."
  - "Sort candidates first to prune recursive branches as soon as a candidate exceeds the remaining target."

youtubeId: ""

solutionUrl: "/solutions/combination-sum-solution/"

timeComplexity: "O(2^target)"
spaceComplexity: "O(target)"

examples:
  - input: "candidates = [2, 3, 6, 7], target = 7"
    output: "[[2, 2, 3], [7]]"
    explanation: "2 and 3 sum to 7 (2+2+3), and 7 alone equals 7."
  - input: "candidates = [2, 3, 5], target = 8"
    output: "[[2, 2, 2, 2], [2, 3, 3], [3, 5]]"
    explanation: "Three combinations of positive integers summing to 8."

constraints:
  - "1 <= candidates.length <= 30"
  - "2 <= candidates[i] <= 40"
  - "All elements of candidates are distinct."
  - "1 <= target <= 40"

realWorld:
  - title: "Currency Coin Change Making"
    description: "Determining all legal denomination combinations that dispense exact target cash totals."
  - title: "Manufacturing Stock Length Cutting"
    description: "Combining standard raw bar lengths to assemble target structural beam segments with zero waste."
  - title: "Cloud Compute Instance Packing"
    description: "Selecting elastic compute node tier instances to fulfill exact requested cluster core capacity."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
