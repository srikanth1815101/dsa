---
title: "Reverse Nodes in k-Group"
date: 2024-01-30T00:00:00Z
difficulty: "Hard"
topics: ["Linked List", "Recursion"]
companies: ["Amazon", "Microsoft", "Facebook"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/reverse-nodes-in-k-group"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/reverse-nodes-in-k-group"
hints:
  - "First count if there are at least k nodes to reverse."
  - "Reverse k nodes, then recursively process the remaining list."
youtubeId: "1UOPsfP85V4"
solutionUrl: "/solutions/reverse-nodes-in-k-group-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n/k)"
examples:
  - input: "head = [1,2,3,4,5], k = 2"
    output: "[2,1,4,3,5]"
    explanation: "Reverse pairs: [1,2] → [2,1], [3,4] → [4,3], 5 remains."
  - input: "head = [1,2,3,4,5], k = 3"
    output: "[3,2,1,4,5]"
    explanation: "Reverse [1,2,3] → [3,2,1], remaining [4,5] has less than k nodes."
constraints:
  - "The number of nodes is n"
  - "1 <= k <= n <= 5000"
  - "0 <= Node.val <= 1000"
realWorld:
  - title: "Data Chunking"
    description: "Reversing fixed-size chunks for encryption algorithms."
  - title: "Buffer Management"
    description: "Reordering data blocks in network buffers."
  - title: "Memory Optimization"
    description: "Restructuring linked memory blocks for cache efficiency."
---

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return the modified list.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
