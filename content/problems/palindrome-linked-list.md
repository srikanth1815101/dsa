---
title: "Palindrome Linked List"
date: 2026-09-27T10:35:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers", "Stack"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PalindromeLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PalindromeLinkedList/engineering"

hints:
  - "Find the middle of the linked list using slow and fast pointers."
  - "Reverse the second half of the list in-place and compare values with the first half node by node."

youtubeId: ""

solutionUrl: "/solutions/palindrome-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 2, 1]"
    output: "true"
    explanation: "The values read forwards [1, 2, 2, 1] are identical to backwards [1, 2, 2, 1]."
  - input: "arr = [1, 2]"
    output: "false"
    explanation: "The values read forwards [1, 2] do not match backwards [2, 1]."

constraints:
  - "1 <= arr.length <= 10^5"
  - "0 <= arr[i] <= 9"
  - "Try solving it in O(n) time and O(1) auxiliary space."

realWorld:
  - title: "DNA Sequence Symmetry Checking"
    description: "Detecting palindromic inverted repeat sequences in genetic molecular strands."
  - title: "Bidirectional Transaction Verification"
    description: "Validating mirror symmetry in two-phase financial escrow settlement transfers."
  - title: "Undo/Redo History Validation"
    description: "Verifying whether symmetric command history allows equivalent backward execution state restoration."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a singly linked list, determine whether the list is a palindrome. Return `true` if it is a palindrome, and `false` otherwise.

Can you solve it in $O(n)$ time complexity and $O(1)$ auxiliary space complexity?
