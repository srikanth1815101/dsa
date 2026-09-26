---
title: "First Index"
date: 2026-09-26T20:47:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Recursion"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FirstIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FirstIndex/engineering"

hints:
  - "Start searching from index 0. If current element matches target, immediately return the current index."
  - "If current index equals arr.length, target is not present; return -1."

youtubeId: ""

solutionUrl: "/solutions/first-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 20, 50], target = 20"
    output: "1"
    explanation: "20 first appears at index 1."
  - input: "arr = [1, 2, 3, 4], target = 10"
    output: "-1"
    explanation: "10 does not exist in the array."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i], target <= 10^9"

realWorld:
  - title: "Log Event Earliest Timestamp Lookup"
    description: "Finding the first occurrence timestamp of an alert or error status code in a time-series log."
  - title: "Stream Message Deduplication"
    description: "Identifying earliest packet arrival offset in a network replay buffer."
  - title: "Lexical Symbol Position Lookup"
    description: "Determining the first token matching an opening delimiter in lexical scanners."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and a target value `target`, recursively find and return the index of the first occurrence of `target` in `arr`. If the target is not present, return `-1`.
