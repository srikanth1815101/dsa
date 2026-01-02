---
title: "Merge k Sorted Lists"
date: 2024-01-17T10:00:00Z
difficulty: "Hard"
topics: ["Linked List", "Divide and Conquer", "Heap"]
datastructures: ["Linked List", "Priority Queue"]
companies: ["Facebook", "Amazon", "Microsoft"]
path: "Mastery"
starterCode: "/dsa/files/MergeKLists.java"
hints:
  - "Compare the heads of all k lists to find the minimum."
  - "Use a Min-Heap (PriorityQueue) to efficiently keep track of the smallest node."
youtubeId: "kpCesr9SXJY"
solutionUrl: "/solutions/merge-k-sorted-lists/"
timeComplexity: "O(N log k)"
spaceComplexity: "O(k)"
examples:
  - input: "lists = [[1,4,5],[1,3,4],[2,6]]"
    output: "[1,1,2,3,4,4,5,6]"
    explanation: "The linked-lists are:\n[1->4->5,\n 1->3->4,\n 2->6]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6"
  - input: "lists = []"
    output: "[]"
constraints:
  - "k == lists.length"
  - "0 <= k <= 10^4"
  - "0 <= lists[i].length <= 500"
  - "-10^4 <= lists[i][j] <= 10^4"
javaTemplate: |
  public class Solution {
      public ListNode mergeKLists(ListNode[] lists) {
          // Your code here
          return null;
      }
  }
---

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Approach

Use a Min-Heap (Priority Queue) to always pick the smallest node among the heads of the `k` lists, then move that list's pointer forward.
