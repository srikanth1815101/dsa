---
title: "Connect Ropes with Minimum Cost"
date: 2026-10-01T01:32:00+05:30
difficulty: "Easy"
topics: ["Heap", "Greedy"]
companies: ["Amazon", "Flipkart", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConnectRopesWithMinimumCost/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConnectRopesWithMinimumCost/engineering"

hints:
  - "Use a Min-Heap (PriorityQueue) to always pick and connect the two shortest available ropes."
  - "Add the combined rope length back into the heap and accumulate its cost into the running total."

youtubeId: ""

solutionUrl: "/solutions/connect-ropes-with-minimum-cost-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [4, 3, 2, 6]"
    output: "** `29` **"
    explanation: "** 1. Connect ropes `2` and `3`: cost = `5`, remaining ropes = `[4, 5, 6]` 2. Connect ropes `4` and `5`: cost = `9`, remaining ropes = `[6, 9]` 3. Connect ropes `6` and `9`: cost = `15`, remaining ropes = `[15]` Total cost = `5 + 9 + 15 = 29`."
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "** `33` **"
    explanation: "** 1. Connect `1` and `2`: cost = `3`, ropes = `[3, 3, 4, 5]` 2. Connect `3` and `3`: cost = `6`, ropes = `[4, 5, 6]` 3. Connect `4` and `5`: cost = `9`, ropes = `[6, 9]` 4. Connect `6` and `9`: cost = `15`, ropes = `[15]` Total cost = `3 + 6 + 9 + 15 = 33`."

constraints:
  - "1 <= arr.length <= 10^5"
  - "1 <= arr[i] <= 10^4"
  - "The cost to connect two ropes of lengths x and y is x + y."
realWorld:
  - title: "Huffman Data Compression Encoding"
    description: "Constructing optimal prefix code trees by iteratively combining the lowest-frequency symbol pairs."
  - title: "Database Multi-Way File Merging"
    description: "Minimizing total I/O disk writes when merging sorted database partition runs into a single table."
  - title: "Distributed MapReduce File Concatenation"
    description: "Scheduling interim reducer file mergers to minimize overall network transfer overhead."
weight: 33
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `arr` representing the lengths of `n` different ropes, connect all the ropes into one rope.

The cost to connect two ropes of lengths `x` and `y` is `x + y`. The new rope formed has length `x + y`, and it can subsequently be connected with other ropes.

Find the minimum total cost to connect all ropes into one.
