---
title: "Reverse Nodes in K Group"
date: 2026-09-27T10:42:00+05:30
difficulty: "Hard"
topics: ["Linked List", "Recursion"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReverseNodesInKGroup/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReverseNodesInKGroup/engineering"

hints:
  - "Before reversing any segment, verify that at least k nodes are present ahead; if not, keep the remaining nodes unchanged."
  - "Reverse the segment of k nodes and recursively link the tail of the current reversed group to the result of reversing the rest of the list."

youtubeId: ""

solutionUrl: "/solutions/reverse-nodes-in-k-group-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4, 5], k = 2"
    output: "[2, 1, 4, 3, 5]"
    explanation: "Nodes are reversed in groups of 2. The remaining single node 5 stays unchanged."
  - input: "arr = [1, 2, 3, 4, 5], k = 3"
    output: "[3, 2, 1, 4, 5]"
    explanation: "The first 3 nodes [1, 2, 3] are reversed to [3, 2, 1]. The remaining 2 nodes stay as [4, 5]."

constraints:
  - "1 <= k <= arr.length <= 5000"
  - "0 <= arr[i] <= 1000"
  - "You may not alter values within nodes; only node connections may be changed."

realWorld:
  - title: "DMA Burst Transaction Ordering"
    description: "Reordering chunks of DMA memory transmission descriptors into reverse chronological order for hardware bus bursts."
  - title: "Cryptographic Feistel Block Reversals"
    description: "Inverting round keys and sub-block linked chains in symmetric block ciphers."
  - title: "Audio Frame Buffer Windowing"
    description: "Inverting granular window samples in chunks of size k for backward audio convolution effects."
---
<!-- All rights reserved to CSRGO DSA -->

Given the head of a linked list represented by an array `arr`, reverse the nodes of the list `k` at a time, and return the modified list as an array.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed. Can you achieve this with $O(1)$ extra memory?
