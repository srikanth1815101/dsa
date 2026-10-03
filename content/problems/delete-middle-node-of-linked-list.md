---
title: "Delete Middle Node of Linked List"
date: 2026-10-01T01:21:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DeleteMiddleNodeOfLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DeleteMiddleNodeOfLinkedList/engineering"

hints:
  - "Use the slow and fast pointer approach where fast advances two steps and slow advances one step."
  - "Keep track of the node preceding the slow pointer to remove the middle node in a single pass."

youtubeId: ""

solutionUrl: "/solutions/delete-middle-node-of-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 3, 4, 7, 1, 2, 6]"
    output: "** `[1, 3, 4, 1, 2, 6]` **"
    explanation: "** `n = 7`. The node at index `⌊7 / 2⌋ = 3` with value `7` is removed."
  - input: "arr = [1, 2, 3, 4]"
    output: "** `[1, 2, 4]` **"
    explanation: "** `n = 4`. The node at index `⌊4 / 2⌋ = 2` with value `3` is removed."

constraints:
  - "1 <= arr.length <= 10^5"
  - "1 <= arr[i] <= 10^5"
  - "If the list contains only 1 node, deleting the middle node results in an empty list."
realWorld:
  - title: "Median Telemetry Buffer Trimming"
    description: "Dropping median sampled values from high-frequency sensor queues to conserve memory."
  - title: "Audio Track Playlist Midpoint Pruning"
    description: "Removing the center transition track in a dual-ended continuous audio DJ queue."
  - title: "Network Packet Buffer Balancing"
    description: "Pruning median packets during buffer saturation to balance end-to-end latency."
weight: 22
---
<!-- All rights reserved to CSRGO DSA -->

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size `n` is the `⌊n / 2⌋`-th node from the start using 0-based indexing, where `⌊x⌋` denotes the largest integer less than or equal to `x`.

- For `n = 1`, `2`, `3`, `4`, and `5`, the 0-based index of the middle node is `0`, `1`, `1`, `2`, and `2`, respectively.

In the array representation, the linked list is represented as an array of integers, and the result should also be an array representing the modified linked list.
