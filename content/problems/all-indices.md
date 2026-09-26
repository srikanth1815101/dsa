---
title: "All Indices"
date: 2026-09-26T20:49:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Recursion"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AllIndices/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AllIndices/engineering"

hints:
  - "Pass a count parameter down the call stack that increments whenever arr[idx] == target."
  - "At the base case (idx == arr.length), allocate an array of size count."
  - "On the return path (post-order), assign res[count] = idx when a match is found."

youtubeId: ""

solutionUrl: "/solutions/all-indices-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 20, 50, 20], target = 20"
    output: "[1, 3, 5]"
    explanation: "20 occurs at indices 1, 3, and 5."
  - input: "arr = [1, 2, 3, 4], target = 10"
    output: "[]"
    explanation: "10 does not exist in the array."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i], target <= 10^9"

realWorld:
  - title: "Inverted Index Construction"
    description: "Recording all document token positions for full-text search indexing."
  - title: "Database Secondary Index Posting Lists"
    description: "Accumulating all primary key row pointers matching a queried foreign key value."
  - title: "Multi-Match Pattern Tracking"
    description: "Extracting all occurrence offsets of DNA markers in genomic sequencing sequences."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and a target value `target`, recursively find and return an array containing all 0-based indices where `target` occurs in `arr`, in ascending order.

If `target` does not appear in `arr`, return an empty array.
