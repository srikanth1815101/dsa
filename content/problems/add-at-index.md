---
title: "Add at Index"
date: 2026-09-27T10:21:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddAtIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddAtIndex/engineering"

hints:
  - "If index is 0, the operation is equivalent to addFirst; if index equals list size, it is equivalent to addLast."
  - "Otherwise, traverse to the node at index - 1 and insert the new node between that node and its successor."

youtubeId: ""

solutionUrl: "/solutions/add-at-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 40], idx = 2, val = 25"
    output: "[10, 20, 25, 30, 40]"
    explanation: "25 is inserted at 0-based index 2, between 20 and 30."
  - input: "arr = [10, 20], idx = 0, val = 5"
    output: "[5, 10, 20]"
    explanation: "Inserting at index 0 prepends 5 as the new head."

constraints:
  - "0 <= arr.length <= 10^5"
  - "0 <= idx <= arr.length"
  - "-10^9 <= arr[i], val <= 10^9"

realWorld:
  - title: "Text Editor Cursor Character Insertion"
    description: "Gap buffer and rope data structures insert newly typed characters at specific arbitrary offset indices."
  - title: "Priority Task Queue Splicing"
    description: "Operating system task schedulers insert expedited priority threads at specific designated queue positions."
  - title: "Audio Track Playlist Mid-Queue Insertion"
    description: "Media player playback queues allow users to queue an upcoming song immediately after the current playing track."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `addAtIndex` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list, an integer index `idx` (0-based), and an integer `val`, insert a new node containing `val` at index `idx` in the linked list.

If `idx == 0`, the node becomes the new head. If `idx == arr.length`, the node is appended at the tail. Return an array representing the sequence of elements in the linked list after the insertion.
