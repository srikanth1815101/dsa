---
title: "Linked List Cycle"
date: 2024-01-09T00:00:00Z
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Bloomberg"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/linked-list-cycle"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/linked-list-cycle"
hints:
  - "Use two pointers moving at different speeds."
  - "If they meet, there's a cycle; if fast reaches null, there's no cycle."
youtubeId: "gBTe7lFR3vc"
solutionUrl: "/solutions/linked-list-cycle-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "head = [3,2,0,-4], pos = 1"
    output: "true"
    explanation: "The tail connects to the 1st node (0-indexed), creating a cycle."
  - input: "head = [1], pos = -1"
    output: "false"
    explanation: "There is no cycle in the linked list."
constraints:
  - "The number of nodes is in the range [0, 10^4]"
  - "-10^5 <= Node.val <= 10^5"
  - "pos is -1 or a valid index in the linked-list"
realWorld:
  - title: "Memory Leak Detection"
    description: "Detecting circular references that prevent garbage collection."
  - title: "Infinite Loop Detection"
    description: "Identifying cycles in program execution or state machines."
  - title: "Network Routing"
    description: "Detecting routing loops in network packet forwarding."
---

Given `head`, the head of a linked list, determine if the linked list has a **cycle** in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.
