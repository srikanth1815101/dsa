---
title: "Reverse Pointer Iterative"
date: 2026-09-27T10:27:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReversePointerIterative/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReversePointerIterative/engineering"

hints:
  - "Maintain three pointers: prev (initially null), curr (initially head), and next."
  - "In each iteration, save curr.next, reverse the pointer by setting curr.next = prev, advance prev = curr, and advance curr = next."

youtubeId: ""

solutionUrl: "/solutions/reverse-pointer-iterative-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "[5, 4, 3, 2, 1]"
    explanation: "Reversing each node's next pointer inverts the directional order of the list."
  - input: "arr = [1, 2]"
    output: "[2, 1]"
    explanation: "Pointer between 1 and 2 is reversed, making 2 point to 1."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The returned array must represent the sequence of nodes starting from the new head."

realWorld:
  - title: "Undo/Redo Chain Reorientation"
    description: "Editor state managers invert undo command histories into redo chains in O(1) auxiliary space."
  - title: "Network Routing Path Inversion"
    description: "Mesh routers reverse source-routed forwarding link lists to trace return acknowledgments back to originators."
  - title: "Transaction Reversal Journals"
    description: "Accounting ledgers traverse linked journal entries in inverse chronological order to compute audit adjustments."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `reversePointerIterative` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list in order, reverse the linked list by iteratively redirecting each node's `next` pointer in place in $O(n)$ time using three pointer references (`prev`, `curr`, and `next`).

Return an array representing the sequence of elements in the linked list starting from the new head.
