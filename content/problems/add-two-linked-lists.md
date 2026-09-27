---
title: "Add Two Linked Lists"
date: 2026-09-27T10:37:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Mathematics"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddTwoLinkedLists/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddTwoLinkedLists/engineering"

hints:
  - "Traverse both linked lists simultaneously from head to tail while tracking any carry generated from the digit sum."
  - "If one list is shorter than the other, treat the missing digits as 0, and remember to append a final node if a carry remains after both lists end."

youtubeId: ""

solutionUrl: "/solutions/add-two-linked-lists-solution/"

timeComplexity: "O(max(n, m))"
spaceComplexity: "O(max(n, m))"

examples:
  - input: "l1 = [2, 4, 3], l2 = [5, 6, 4]"
    output: "[7, 0, 8]"
    explanation: "342 + 465 = 807, represented in reverse digit order as [7, 0, 8]."
  - input: "l1 = [0], l2 = [0]"
    output: "[0]"
    explanation: "0 + 0 = 0."

constraints:
  - "1 <= l1.length, l2.length <= 100"
  - "0 <= l1[i], l2[i] <= 9"
  - "The numbers do not contain any leading zero, except the number 0 itself."

realWorld:
  - title: "Arbitrary-Precision BigInt Arithmetic"
    description: "Adding numbers larger than standard 64-bit integer registers represented as linked digit chunks."
  - title: "Financial Ledger Large-Sum Accumulation"
    description: "Summing multi-currency high-precision currency ledgers without precision loss."
  - title: "Cryptographic Modular Arithmetic"
    description: "Performing large integer additions during RSA key generation and digital signature verifications."
---
<!-- All rights reserved to CSRGO DSA -->

You are given two non-empty linked lists represented as integer arrays `l1` and `l2`, each representing a non-negative integer. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list (in the same reverse order array format).

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
