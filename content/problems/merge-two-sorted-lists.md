---
title: "Merge Two Sorted Lists"
date: 2026-09-27T10:30:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeTwoSortedLists/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeTwoSortedLists/engineering"

hints:
  - "Compare the current heads of both lists and choose the node with the smaller value to attach to the merged list."
  - "Advance the pointer in the selected list and repeat until one list is exhausted, then attach the remaining elements of the non-empty list."

youtubeId: ""

solutionUrl: "/solutions/merge-two-sorted-lists-solution/"

timeComplexity: "O(n + m)"
spaceComplexity: "O(n + m)"

examples:
  - input: "l1 = [1, 2, 4], l2 = [1, 3, 4]"
    output: "[1, 1, 2, 3, 4, 4]"
    explanation: "The two sorted lists are spliced together in ascending order: 1 <= 1 <= 2 <= 3 <= 4 <= 4."
  - input: "l1 = [], l2 = [0]"
    output: "[0]"
    explanation: "Merging an empty list with a list containing a single node yields [0]."

constraints:
  - "0 <= l1.length, l2.length <= 50"
  - "-100 <= Node.val <= 100"
  - "Both l1 and l2 are sorted in non-decreasing order."

realWorld:
  - title: "Database Index Merging"
    description: "External multi-way merge sort merges sorted index runs from disk into unified B-Tree indexes."
  - title: "Distributed Log Aggregation"
    description: "Combines timestamp-ordered event streams from distributed microservices without re-sorting."
  - title: "Order Book Matching"
    description: "Merges sorted buy and sell limit orders in real-time trading engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given two sorted linked lists represented by integer arrays `l1` and `l2`, merge them into a single sorted linked list in non-decreasing order and return the merged list as an array.

The elements in both input arrays are already sorted in ascending order. The merged result must contain all elements from both lists in sorted order.
