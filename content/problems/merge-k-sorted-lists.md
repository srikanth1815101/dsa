---
title: "Merge K Sorted Lists"
date: 2026-09-27T11:27:00+05:30
difficulty: "Hard"
topics: ["Linked List", "Heap", "Divide and Conquer"]
companies: ["Amazon", "Google", "Oracle"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeKSortedLists/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeKSortedLists/engineering"

hints:
  - "Insert the first element of each of the k sorted lists into a min-heap alongside its list and element indices."
  - "Repeatedly poll the smallest element, append it to your result, and insert the next element from that same list into the heap."

youtubeId: ""

solutionUrl: "/solutions/merge-k-sorted-lists-solution/"

timeComplexity: "O(N log k)"
spaceComplexity: "O(k)"

examples:
  - input: "lists = [[1, 4, 5], [1, 3, 4], [2, 6]]"
    output: "[1, 1, 2, 3, 4, 4, 5, 6]"
    explanation: "All elements from the three sorted lists merged into one sorted sequence."
  - input: "lists = [[], [1]]"
    output: "[1]"
    explanation: "The first list is empty, merging with [1] produces [1]."

constraints:
  - "k == lists.length"
  - "0 <= k <= 10^4"
  - "0 <= lists[i].length <= 500"
  - "-10^4 <= lists[i][j] <= 10^4"
  - title: "Distributed Log Ingestion Merging"
    description: "Combining chronologically ordered log chunks generated independently by k microservice cluster instances."
  - title: "External Sort Run Consolidation"
    description: "Multiway merge phase of disk-based external sorting on massive datasets exceeding server RAM."
  - title: "Multi-Exchange Market Depth Merging"
    description: "Consolidating pre-sorted limit order books from k discrete financial exchanges into a unified price ticker."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array of $k$ sorted integer arrays `lists`, where each individual array is sorted in ascending order.

Merge all $k$ sorted arrays into a single sorted array and return it.
