---
title: "Merge Sort Linked List"
date: 2026-09-27T10:31:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Sorting", "Divide and Conquer"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeSortLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeSortLinkedList/engineering"

hints:
  - "Find the middle of the linked list using slow and fast pointers to split the list into two halves."
  - "Recursively sort each half and merge the two sorted sublists together."

youtubeId: ""

solutionUrl: "/solutions/merge-sort-linked-list-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(log n)"

examples:
  - input: "arr = [4, 2, 1, 3]"
    output: "[1, 2, 3, 4]"
    explanation: "The unsorted list [4, 2, 1, 3] is partitioned and merged into the sorted sequence [1, 2, 3, 4]."
  - input: "arr = [-1, 5, 3, 4, 0]"
    output: "[-1, 0, 3, 4, 5]"
    explanation: "Sorting the linked list elements in ascending order gives [-1, 0, 3, 4, 5]."

constraints:
  - "0 <= arr.length <= 5 * 10^4"
  - "-10^5 <= arr[i] <= 10^5"
  - "All operations must achieve O(n log n) time complexity."

realWorld:
  - title: "External Sort in Databases"
    description: "Sorting massive datasets on disk where sequential pointer traversal minimizes costly random disk seeks."
  - title: "Memory-Efficient Stream Sorting"
    description: "Merge sort on linked node structures sorts incoming streaming data without requiring contiguous memory reallocations."
  - title: "Priority Task Scheduling"
    description: "Sorting linked queues of process tasks dynamically based on execution priority weights."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing an unsorted singly linked list, sort the linked list in ascending order using the Merge Sort algorithm and return the sorted list as an array.

Your algorithm should run in $O(n \log n)$ time complexity and use $O(\log n)$ auxiliary space (accounting for the recursion call stack).
