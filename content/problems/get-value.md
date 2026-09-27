---
title: "Get Value"
date: 2026-09-27T10:25:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetValue/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetValue/engineering"

hints:
  - "Start traversing from the head node while counting the current index from 0."
  - "When the traversal reaches index idx, return the data value stored in that node."

youtubeId: ""

solutionUrl: "/solutions/get-value-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [10, 20, 30, 40], idx = 2"
    output: "30"
    explanation: "The node at 0-based index 2 stores the value 30."
  - input: "arr = [50], idx = 0"
    output: "50"
    explanation: "Index 0 is the head node, storing value 50."

constraints:
  - "1 <= arr.length <= 10^5"
  - "0 <= idx < arr.length"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Paginated Record Retrieval"
    description: "Database cursor result iterators retrieve a specific record offset in forward-only linked record pages."
  - title: "Sequential Data Stream Sampling"
    description: "Audio processing buffers sample digital waveform amplitude at specific offset frame nodes."
  - title: "Hardware Packet Inspect Offset"
    description: "Network interface cards read header protocol flags positioned at designated byte-node offsets."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `getValue` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list and a 0-based integer index `idx`, retrieve and return the integer value stored at index `idx` in the linked list.

If the index is out of bounds, return `-1`.
