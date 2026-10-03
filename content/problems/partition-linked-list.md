---
title: "Partition Linked List"
date: 2026-10-01T01:19:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PartitionLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PartitionLinkedList/engineering"

hints:
  - "Maintain two separate chains: one for nodes strictly less than x, and another for nodes greater than or equal to x."
  - "Concatenate the end of the smaller chain to the beginning of the greater-or-equal chain, terminating the final node with null."

youtubeId: ""

solutionUrl: "/solutions/partition-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "head = [1, 4, 3, 2, 5, 2], x = 3"
    output: "[1, 2, 2, 4, 3, 5]"
    explanation: "Nodes with value less than 3 are 1, 2, 2 (preserving order). Nodes greater or equal to 3 are 4, 3, 5."
  - input: "head = [2, 1], x = 2"
    output: "[1, 2]"
    explanation: "1 is less than 2 and comes first; 2 is greater than or equal to 2 and follows."

constraints:
  - "The number of nodes in the list is in the range [0, 200]"
  - "-100 <= Node.val <= 100"
  - "-200 <= x <= 200"

realWorld:
  - title: "Priority Queue Stable Bifurcation"
    description: "Partitioning incoming batch job queues into immediate-dispatch vs deferred priority queues while maintaining submission order."
  - title: "Network Packet QoS Demultiplexing"
    description: "Splitting packet queues by bandwidth priority threshold for differentiated scheduling without disturbing order."
  - title: "Database Partitioning Buffer Compaction"
    description: "Sorting unindexed memory tuples into boundary buckets prior to parallel B-tree index construction."
weight: 20
---
<!-- All rights reserved to CSRGO DSA -->

Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.

You should **preserve** the original relative order of the nodes in each of the two partitions.
