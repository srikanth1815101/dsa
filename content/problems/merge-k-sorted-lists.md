---
title: "Merge k Sorted Lists"
date: 2024-01-22T00:00:00Z
difficulty: "Hard"
topics: ["Linked List", "Divide and Conquer", "Heap"]
companies: ["Amazon", "Facebook", "Microsoft"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/merge-k-sorted-lists"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/merge-k-sorted-lists"
hints:
  - "Use a min-heap to always extract the smallest element efficiently."
  - "Alternative: merge lists pairwise using divide and conquer."
youtubeId: "kpCesr9VXDA"
solutionUrl: "/solutions/merge-k-sorted-lists-solution/"
timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"
examples:
  - input: "lists = [[1,4,5],[1,3,4],[2,6]]"
    output: "[1,1,2,3,4,4,5,6]"
    explanation: "Merge all three sorted lists into one sorted list."
  - input: "lists = []"
    output: "[]"
    explanation: "No lists to merge, return empty list."
constraints:
  - "k == lists.length"
  - "0 <= k <= 10^4"
  - "0 <= lists[i].length <= 500"
  - "-10^4 <= lists[i][j] <= 10^4"
  - "lists[i] is sorted in ascending order"
realWorld:
  - title: "Log Aggregation"
    description: "Merging sorted log streams from multiple servers into a unified view."
  - title: "External Sorting"
    description: "Merging sorted runs from disk during external merge sort."
  - title: "Search Engine Results"
    description: "Combining ranked results from multiple index shards."
---

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in **ascending order**.

Merge all the linked-lists into **one sorted** linked-list and return it.
