---
title: "Odd Even List"
date: 2026-09-27T10:33:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/OddEvenList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/OddEvenList/engineering"

hints:
  - "Maintain two separate pointer chains for odd-positioned and even-positioned nodes as you traverse the list."
  - "Save the head of the even list so you can connect the tail of the odd list to the head of the even list at the end."

youtubeId: ""

solutionUrl: "/solutions/odd-even-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "[1, 3, 5, 2, 4]"
    explanation: "Nodes at odd positions (1st, 3rd, 5th -> values 1, 3, 5) come first, followed by even positions (2nd, 4th -> values 2, 4)."
  - input: "arr = [2, 1, 3, 5, 6, 4, 7]"
    output: "[2, 3, 6, 7, 1, 5, 4]"
    explanation: "Odd indexed nodes (values 2, 3, 6, 7) are grouped together, followed by even indexed nodes (values 1, 5, 4)."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^6 <= arr[i] <= 10^6"
  - "The relative order among odd nodes and among even nodes must remain preserved."

realWorld:
  - title: "Network Packet Interleaving"
    description: "Reordering alternate control and data frames in streaming network protocols for decoupled processing."
  - title: "Multi-core Task Scheduling"
    description: "Partitioning alternating sequential work items across two distinct hardware execution pipelines."
  - title: "Audio Channel De-multiplexing"
    description: "Separating alternating left and right channel audio sample buffers in continuous PCM streams."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list as an array.

The first node is considered odd, the second node is even, and so on. Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in $O(1)$ extra space complexity and $O(n)$ time complexity.
