---
title: "Add Last"
date: 2026-09-27T10:20:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddLast/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddLast/engineering"

hints:
  - "Allocate a new node containing the given value."
  - "If the list is empty, the new node becomes both head and tail; otherwise, set tail.next to the new node and advance the tail."

youtubeId: ""

solutionUrl: "/solutions/add-last-solution/"

timeComplexity: "O(1) with tail pointer, O(n) array conversion"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30], val = 40"
    output: "[10, 20, 30, 40]"
    explanation: "Appending 40 after tail node 30 places 40 at the end of the linked list."
  - input: "arr = [], val = 5"
    output: "[5]"
    explanation: "Adding to an empty list sets the new node as the single element."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i], val <= 10^9"
  - "The returned array must represent the exact sequence of nodes in the linked list starting from head."

realWorld:
  - title: "Log Event Append Streams"
    description: "Distributed telemetry logging queues append new system log events to the end of singly linked stream chains."
  - title: "FIFO Task Dispatch Queues"
    description: "Operating system job schedulers enqueue arriving task threads at the tail of scheduling linked lists."
  - title: "Music Playlist Queue Management"
    description: "Audio streaming applications append user-selected tracks to the end of active playback queues."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `addLast` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list in order and an integer `val`, insert a new node containing `val` at the end (tail) of the linked list.

Return an array representing the sequence of elements in the linked list after inserting `val` at the tail.
