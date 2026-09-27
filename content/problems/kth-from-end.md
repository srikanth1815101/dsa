---
title: "Kth from End"
date: 2026-09-27T10:28:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Two Pointers"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KthFromEnd/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KthFromEnd/engineering"

hints:
  - "Advance a fast pointer by k steps ahead of a slow pointer."
  - "Then move both fast and slow pointers simultaneously one step at a time until fast reaches the tail."

youtubeId: ""

solutionUrl: "/solutions/kth-from-end-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [10, 20, 30, 40, 50], k = 2"
    output: "30"
    explanation: "0th from end is 50, 1st from end is 40, and 2nd from end is 30."
  - input: "arr = [10, 20], k = 0"
    output: "20"
    explanation: "0th from end is the tail node 20."

constraints:
  - "1 <= arr.length <= 10^5"
  - "0 <= k < arr.length"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Log File Tail Offset Inspection"
    description: "System diagnostics tools stream linked server logs to inspect errors occurring k positions prior to system shutdown."
  - title: "Media Stream Buffering Offsets"
    description: "Video playback pipelines inspect audio synchronization frames located k frames before the stream's write buffer tail."
  - title: "Sliding Window Suffix Gauges"
    description: "Financial ticker queues extract historical price moving points positioned k steps behind real-time tick heads."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the initial nodes of a singly linked list and a 0-based integer offset `k`, find the value of the `k`-th node from the end of the linked list without calculating the size of the list in advance.

Here, `k = 0` represents the tail node of the list, `k = 1` represents the second-to-last node, and so forth.

Return the integer value stored in the `k`-th node from the end.
