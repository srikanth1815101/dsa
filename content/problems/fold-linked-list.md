---
title: "Fold Linked List"
date: 2026-09-27T10:36:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers", "Stack"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FoldLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FoldLinkedList/engineering"

hints:
  - "Split the linked list into two halves at the middle node."
  - "Reverse the second half of the list and then interleave the nodes of the two halves alternately."

youtubeId: ""

solutionUrl: "/solutions/fold-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4]"
    output: "[1, 4, 2, 3]"
    explanation: "Nodes are folded by alternating front and back: 1st (1), 4th (4), 2nd (2), 3rd (3)."
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "[1, 5, 2, 4, 3]"
    explanation: "Nodes are interleaved: 1st (1), 5th (5), 2nd (2), 4th (4), 3rd (3)."

constraints:
  - "1 <= arr.length <= 5 * 10^4"
  - "1 <= arr[i] <= 1000"
  - "You must reorder the nodes in-place without modifying node values."

realWorld:
  - title: "Interleaved Memory Bank Access"
    description: "Alternating consecutive memory references across top and bottom address banks to eliminate pipeline bank conflicts."
  - title: "Video Frame Shuffling"
    description: "Interleaving progressive and interlaced scan lines from dual sensor capture feeds."
  - title: "Tournament Bracket Generation"
    description: "Pairing top seeds with bottom seeds (1 vs N, 2 vs N-1) in elimination tournament rounds."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a singly linked list:
$L_0 \to L_1 \to \dots \to L_{n-1} \to L_n$

Reorder the list on itself (fold the list) so that it follows the pattern:
$L_0 \to L_n \to L_1 \to L_{n-1} \to L_2 \to L_{n-2} \to \dots$

Return the resulting reordered linked list as an array.
