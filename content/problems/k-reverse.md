---
title: "K Reverse"
date: 2026-09-27T10:34:00+05:30
difficulty: "Hard"
topics: ["Linked List", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KReverse/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KReverse/engineering"

hints:
  - "Count if there are at least k nodes available to reverse; if not, leave the remaining nodes intact."
  - "Reverse the first k nodes iteratively, then recursively process the remaining sublist and link its head to the current group's tail."

youtubeId: ""

solutionUrl: "/solutions/k-reverse-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n / k)"

examples:
  - input: "arr = [1, 2, 3, 4, 5], k = 2"
    output: "[2, 1, 4, 3, 5]"
    explanation: "Reversing in chunks of 2 turns [1, 2] to [2, 1] and [3, 4] to [4, 3], leaving node 5 unchanged."
  - input: "arr = [1, 2, 3, 4, 5], k = 3"
    output: "[3, 2, 1, 4, 5]"
    explanation: "First 3 nodes [1, 2, 3] are reversed to [3, 2, 1], and the last 2 nodes remain as [4, 5]."

constraints:
  - "1 <= k <= arr.length <= 5000"
  - "0 <= arr[i] <= 1000"
  - "Nodes must be modified in chunks of exactly k nodes."

realWorld:
  - title: "Batch Packet Processing"
    description: "Reordering chunks of network telemetry payloads in blocks of size k for hardware SIMD vector units."
  - title: "Memory Block Inversion"
    description: "Inverting contiguous data sectors during cryptographic block interleaving."
  - title: "Cache Line Flushing"
    description: "Reordering grouped cache lines into reverse order for optimal hardware cache eviction policies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a singly linked list and an integer `k`, reverse the nodes of the list `k` at a time and return the modified list as an array.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k`, then the remaining nodes at the end should stay in their original order.

You may not alter the values in the list's nodes; only nodes themselves may be changed.
