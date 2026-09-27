---
title: "Remove Last"
date: 2026-09-27T10:23:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLast/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLast/engineering"

hints:
  - "If the list has zero or one node, removing the last element leaves the list completely empty."
  - "Otherwise, traverse until the second-to-last node and set its next reference to null."

youtubeId: ""

solutionUrl: "/solutions/remove-last-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30]"
    output: "[10, 20]"
    explanation: "Removing the tail node 30 leaves nodes [10, 20]."
  - input: "arr = [42]"
    output: "[]"
    explanation: "Removing the only node leaves an empty list."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The returned array must represent the sequence of remaining nodes from head to the new tail."

realWorld:
  - title: "Browser Navigation History Truncation"
    description: "Browsers discard the oldest or latest forward-navigation history entry when branch limits are exceeded."
  - title: "Fixed-Capacity Rolling Buffers"
    description: "Telemetry queues drop the oldest tail entries when maximum buffer capacity limits are reached."
  - title: "Interactive Canvas Action Discarding"
    description: "Vector graphics applications pop cancelled preview states from the tail of tentative change chains."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `removeLast` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list in order, remove the last element (the tail) from the linked list.

If the list is empty or contains only one node, the resulting list is empty. Return an array representing the sequence of remaining elements in the linked list.
