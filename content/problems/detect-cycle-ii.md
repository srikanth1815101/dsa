---
title: "Detect Cycle II"
date: 2026-09-27T10:40:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers", "Mathematics"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DetectCycleII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DetectCycleII/engineering"

hints:
  - "Use Floyd's Cycle Detection algorithm to find the point where the slow and fast pointers meet."
  - "Reset one pointer to the head of the list while keeping the other at the meeting point; advance both one step at a time until they collide at the cycle entry node."

youtubeId: ""

solutionUrl: "/solutions/detect-cycle-ii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [3, 2, 0, -4], pos = 1"
    output: "2"
    explanation: "There is a cycle in the linked list where the tail connects to node with value 2 at index 1."
  - input: "arr = [1, 2], pos = 0"
    output: "1"
    explanation: "The tail connects back to the head node with value 1 at index 0."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^5 <= arr[i] <= 10^5"
  - "pos is -1 or a valid index in the linked list."

realWorld:
  - title: "Memory Leak Entry Point Detection"
    description: "Pinpointing the exact root reference node anchoring circular references in managed runtimes."
  - title: "Distributed Consensus Loop Origin"
    description: "Isolating the origin node that initiated an endless gossip relay cycle in peer-to-peer networks."
  - title: "Build Dependency Loop Diagnostics"
    description: "Reporting the exact package causing circular dependency errors in large mono-repository package managers."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a singly linked list and an integer `pos` representing the index of the node where the tail links back, find and return the value of the node where the cycle begins.

If there is no cycle in the linked list (`pos = -1`), return `-1`.

You must solve the problem using $O(1)$ memory without modifying the linked list.
