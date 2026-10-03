---
title: "Morris Inorder Traversal"
date: 2026-10-01T01:27:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "Inorder Traversal"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MorrisInorderTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MorrisInorderTraversal/engineering"

hints:
  - "Use threaded binary trees by creating temporary links from predecessor nodes to current nodes."
  - "If the predecessor's right child is null, link it to current and move left; if it already points to current, unlink it, visit current, and move right."

youtubeId: ""

solutionUrl: "/solutions/morris-inorder-traversal-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, -1, 2, 3, -1, -1, -1]"
    output: "** `[1, 3, 2]` **"
    explanation: "** The binary tree is:"
  - input: "arr = [1, 2, -1, -1, 3, -1, -1]"
    output: "** `[2, 1, 3]` **"
    explanation: "** The binary tree has root 1 with left child 2 and right child 3. Inorder traversal produces `[2, 1, 3]`."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^4 <= arr[i] <= 10^4"
  - "The input array is a valid pre-order serialization of a binary tree."

realWorld:
  - title: "Embedded Microcontroller Traversal"
    description: "Visiting deep hierarchy trees in extreme memory-constrained firmware without stack allocation."
  - title: "Real-Time Kernel Memory Sweeper"
    description: "Traversing kernel object hierarchies without incurring stack overflow risks or heap allocations."
  - title: "Low-Latency Garbage Collector"
    description: "Scanning pointer graphs in bounded constant memory during hard real-time execution."
weight: 28
---
<!-- All rights reserved to CSRGO DSA -->

Given a binary tree represented by its pre-order serialized array (where `-1` denotes a null node), return its inorder traversal without using recursion or an auxiliary stack, utilizing Morris Inorder Traversal.

Morris Traversal is an algorithm that achieves $O(N)$ time complexity while requiring only $O(1)$ auxiliary space by establishing temporary predecessor threads that are dismantled after traversal.
