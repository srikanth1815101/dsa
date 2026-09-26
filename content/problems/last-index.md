---
title: "Last Index"
date: 2026-09-26T20:48:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Recursion"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LastIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LastIndex/engineering"

hints:
  - "Use a post-order recursive pattern: make the recursive call for index + 1 first to check the remainder of the array."
  - "If the recursive call finds the target in the remaining array, return that result. Otherwise, check if the current element matches."

youtubeId: ""

solutionUrl: "/solutions/last-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 20, 50], target = 20"
    output: "3"
    explanation: "20 occurs at indices 1 and 3; the last index is 3."
  - input: "arr = [1, 2, 3, 4], target = 10"
    output: "-1"
    explanation: "10 does not exist in the array."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i], target <= 10^9"

realWorld:
  - title: "Latest Checkpoint or Snapshot Identification"
    description: "Finding the most recent database WAL savepoint record in an append-only audit trail."
  - title: "File Extension Suffix Locating"
    description: "Determining the last dot separator in compound filenames to extract the true extension."
  - title: "Undo State Restoration"
    description: "Finding the latest user action of a given event type to roll back changes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and a target value `target`, recursively find and return the index of the last occurrence of `target` in `arr`. If the target is not present, return `-1`.
