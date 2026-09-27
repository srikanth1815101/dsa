---
title: "Reverse Data Iterative"
date: 2026-09-27T10:26:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReverseDataIterative/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReverseDataIterative/engineering"

hints:
  - "Maintain left and right pointer indices, where left starts at 0 and right starts at size - 1."
  - "In each step, locate the nodes at left and right indices, swap their data values, and increment left while decrementing right."

youtubeId: ""

solutionUrl: "/solutions/reverse-data-iterative-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "[5, 4, 3, 2, 1]"
    explanation: "Swapping values between symmetric endpoints reverses the data values in the linked list."
  - input: "arr = [10, 20]"
    output: "[20, 10]"
    explanation: "10 and 20 are swapped."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"
  - "The returned array must represent the sequence of values after swapping node data."

realWorld:
  - title: "In-Place Buffer Reversal"
    description: "Embedded communication peripherals reverse payload data payloads without modifying memory address headers."
  - title: "String Mutation Buffers"
    description: "Memory-constrained text processors swap character payload bytes directly across linked character segment nodes."
  - title: "Cryptographic Block Reflection"
    description: "Block cipher padding stages reflect state array bytes symmetrically across linked pipeline frames."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `reverseDataIterative` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list, reverse the linked list by iteratively swapping the data values stored within the nodes (leaving the node pointer links unmodified) using a two-pointer index approach.

Return an array representing the sequence of values in the linked list after the data reversal.
