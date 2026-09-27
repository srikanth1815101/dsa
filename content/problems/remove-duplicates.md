---
title: "Remove Duplicates"
date: 2026-09-27T10:32:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveDuplicates/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveDuplicates/engineering"

hints:
  - "Since the list is already sorted, adjacent nodes will have identical values if they are duplicates."
  - "Traverse the list and update the current node's next pointer to bypass any node having the same value."

youtubeId: ""

solutionUrl: "/solutions/remove-duplicates-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 1, 2]"
    output: "[1, 2]"
    explanation: "The duplicate value 1 is bypassed, leaving only unique elements [1, 2]."
  - input: "arr = [1, 1, 2, 3, 3]"
    output: "[1, 2, 3]"
    explanation: "Multiple duplicates of 1 and 3 are removed to retain [1, 2, 3]."

constraints:
  - "0 <= arr.length <= 300"
  - "-100 <= arr[i] <= 100"
  - "The input list is guaranteed to be sorted in ascending order."

realWorld:
  - title: "Database Record Deduplication"
    description: "Removing redundant sequential primary key queries from pre-sorted query result buffers."
  - title: "Log Event Stream Compression"
    description: "Collapsing adjacent identical telemetry log events to reduce bandwidth and storage overhead."
  - title: "Financial Ledger Cleanup"
    description: "Filtering idempotent duplicate transaction entries from sorted reconciliation feeds."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a sorted singly linked list, delete all duplicates such that each element appears only once. Return the linked list as an array.

The input list is guaranteed to be sorted in ascending order.
