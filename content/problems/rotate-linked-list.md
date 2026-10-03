---
title: "Rotate Linked List"
date: 2026-10-01T01:18:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RotateLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RotateLinkedList/engineering"

hints:
  - "Compute the length of the list n and connect the tail to the head to form a temporary ring."
  - "The new tail is located at index (n - (k % n) - 1); disconnect the ring at this node."

youtubeId: ""

solutionUrl: "/solutions/rotate-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "head = [1, 2, 3, 4, 5], k = 2"
    output: "[4, 5, 1, 2, 3]"
    explanation: "Rotate 1 step right: [5, 1, 2, 3, 4]. Rotate 2 steps right: [4, 5, 1, 2, 3]."
  - input: "head = [0, 1, 2], k = 4"
    output: "[2, 0, 1]"
    explanation: "Rotating 4 steps is equivalent to rotating 4 % 3 = 1 step to the right."

constraints:
  - "The number of nodes in the list is in the range [0, 500]"
  - "-100 <= Node.val <= 100"
  - "0 <= k <= 2 * 10^9"

realWorld:
  - title: "Circular Carousel Image Navigation"
    description: "Shifting display items in a sliding UI carousel widget by k steps without reallocating nodes."
  - title: "Process Round-Robin Queue Preemption"
    description: "Rotating runnable process dispatch queues by k scheduling slots upon priority preemption."
  - title: "Audio Sample Track Looping"
    description: "Adjusting cyclic audio sample loop start points by k discrete sample block offsets."
weight: 19
---
<!-- All rights reserved to CSRGO DSA -->

Given the `head` of a linked list, rotate the list to the right by `k` places.
