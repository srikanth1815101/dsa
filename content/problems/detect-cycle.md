---
title: "Detect Cycle"
date: 2026-09-27T10:39:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers", "Hashing"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DetectCycle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DetectCycle/engineering"

hints:
  - "Use Floyd's cycle-finding algorithm with a slow pointer moving one step and a fast pointer moving two steps."
  - "If the fast pointer encounters null, no cycle exists; if the fast pointer meets the slow pointer, a cycle is present."

youtubeId: ""

solutionUrl: "/solutions/detect-cycle-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [3, 2, 0, -4], pos = 1"
    output: "true"
    explanation: "There is a cycle in the linked list where the tail connects to the 1st node (0-indexed)."
  - input: "arr = [1, 2], pos = -1"
    output: "false"
    explanation: "The tail does not connect to any node, so there is no cycle."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^5 <= arr[i] <= 10^5"
  - "pos is -1 or a valid index in the linked list."

realWorld:
  - title: "Operating System Deadlock Detection"
    description: "Detecting circular wait conditions in resource allocation graphs using cycle detection."
  - title: "Network Routing Loop Prevention"
    description: "Identifying packet forwarding loops in autonomous routing tables before network congestion occurs."
  - title: "Garbage Collection Reference Cycle Detection"
    description: "Finding cyclic object references that standard reference counting collectors cannot reclaim."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a linked list and an integer `pos` representing the index of the node that the tail's `next` pointer connects to, determine whether the linked list has a cycle.

If `pos = -1`, then there is no cycle in the linked list.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`. Can you solve it using $O(1)$ memory?
