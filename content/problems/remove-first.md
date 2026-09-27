---
title: "Remove First"
date: 2026-09-27T10:22:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveFirst/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveFirst/engineering"

hints:
  - "If the list is empty or has a single node, removing the first element leaves an empty list."
  - "Otherwise, advance the head reference to head.next to decouple the first node."

youtubeId: ""

solutionUrl: "/solutions/remove-first-solution/"

timeComplexity: "O(1) removal, O(n) array conversion"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30]"
    output: "[20, 30]"
    explanation: "Removing the head node 10 leaves the remaining nodes [20, 30]."
  - input: "arr = [5]"
    output: "[]"
    explanation: "Removing the single node leaves the list empty."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The returned array must represent the sequence of nodes starting from the new head."

realWorld:
  - title: "Queue Dequeue Operations"
    description: "Standard FIFO queues implemented via singly linked lists dequeue elements by removing from head in O(1) time."
  - title: "Event Dispatch Consumption"
    description: "Message broker consumer workers pop the earliest pending event from the front of processing pipelines."
  - title: "Breadth-First Search Frontier"
    description: "Graph traversal algorithms pop visiting vertices from the head of node discovery linked lists."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `removeFirst` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list in order, remove the first element (the head) from the linked list.

If the list is empty or contains only one node, the resulting list is empty. Return an array representing the sequence of remaining elements in the linked list.
