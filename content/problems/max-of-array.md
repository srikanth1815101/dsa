---
title: "Max of Array"
date: 2026-09-26T20:46:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Recursion"]
companies: ["Amazon", "TCS", "Infosys"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaxOfArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaxOfArray/engineering"

hints:
  - "The base case is when current index reaches the last element (arr.length - 1), where the maximum is simply arr[arr.length - 1]."
  - "In the recursive step, compare arr[index] with the maximum of the rest of the array from index + 1."

youtubeId: ""

solutionUrl: "/solutions/max-of-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 30, 20, 50, 40]"
    output: "50"
    explanation: "50 is the maximum element in the array."
  - input: "arr = [-15, -3, -25, -7]"
    output: "-3"
    explanation: "-3 is the maximum among negative integers."

constraints:
  - "1 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Peak Sensor Reading Extraction"
    description: "Finding the maximum voltage or temperature spike from a recorded telemetry buffer."
  - title: "High-Water Mark Resource Tracking"
    description: "Determining peak concurrent RAM allocation across sequential logging intervals."
  - title: "Divide and Conquer Tree Reductions"
    description: "Parallelizing fold and map-reduce aggregation kernels over partition arrays."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-empty array of integers `arr`, recursively find and return the maximum value in the array.
