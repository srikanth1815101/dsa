---
title: "Subarrays of Array"
date: 2026-09-25T22:28:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sliding Window"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubarraysOfArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SubarraysOfArray/engineering"

hints:
  - "Use three nested loops: the outer loop chooses the start index i, the middle loop chooses the end index j, and the inner loop extracts elements from i to j."
  - "Separate elements within a subarray using a tab (\\t) and conclude each subarray with a newline (\\n)."

youtubeId: ""

solutionUrl: "/solutions/subarrays-of-array-solution/"

timeComplexity: "O(n^3)"
spaceComplexity: "O(n^3)"

examples:
  - input: "arr = [10, 20, 30]"
    output: "10\n10\t20\n10\t20\t30\n20\n20\t30\n30\n"
    explanation: "All contiguous subarrays: [10], [10, 20], [10, 20, 30], [20], [20, 30], [30]."
  - input: "arr = [1, 2]"
    output: "1\n1\t2\n2\n"
    explanation: "Contiguous subarrays for length 2 are [1], [1, 2], and [2]."

constraints:
  - "0 <= arr.length <= 100"
  - "-10^9 <= arr[i] <= 10^9"
  - "Each subarray must be printed on a separate line with elements separated by tab (\\t)."

realWorld:
  - title: "Financial Moving Average Windows"
    description: "Extracting contiguous time-series pricing windows to compute rolling exponential moving averages."
  - title: "Network Packet Stream Windowing"
    description: "Inspecting continuous packet sequences within sliding transmission buffers for drop detection."
  - title: "Genomics Sequence Motif Analysis"
    description: "Scanning contiguous DNA/RNA base sub-sequences to identify conserved protein-binding motifs."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, generate and return all **contiguous subarrays** of the array in order of their starting and ending indices. Each subarray should be formatted on its own line with elements separated by a tab (`\t`).
