---
title: "Middle of Linked List"
date: 2026-09-27T10:29:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MiddleOfLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MiddleOfLinkedList/engineering"

hints:
  - "Use the fast and slow pointer technique (tortoise and hare)."
  - "Advance slow by one node and fast by two nodes in each step; when fast reaches the end, slow is at the middle."

youtubeId: ""

solutionUrl: "/solutions/middle-of-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "3"
    explanation: "In an odd-length list with 5 nodes, the middle node is 3."
  - input: "arr = [1, 2, 3, 4, 5, 6]"
    output: "4"
    explanation: "In an even-length list with two middle nodes 3 and 4, the second middle node 4 is returned."

constraints:
  - "1 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The linked list is guaranteed to have at least one element."

realWorld:
  - title: "Merge Sort Linked List Halving"
    description: "Divide-and-conquer algorithms split linked lists into balanced halves in O(n) time using fast and slow pointers."
  - title: "Streaming Data Median Approximations"
    description: "Buffered media pipelines sample middle checkpoint frames without full buffer traversals."
  - title: "Cycle and Palindrome Detection"
    description: "Linked list palindrome verifiers find the middle node to reverse the second half of the list in-place."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the initial nodes of a singly linked list, find and return the value of the middle node.

If there are two middle nodes (in an even-length list), return the second middle node.
