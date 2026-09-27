---
title: "Find Median from Data Stream"
date: 2026-09-27T11:29:00+05:30
difficulty: "Hard"
topics: ["Heap", "Design", "Divide and Conquer"]
companies: ["Amazon", "Google", "Morgan Stanley"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FindMedianFromDataStream/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FindMedianFromDataStream/engineering"

hints:
  - "Maintain two balanced heaps: a max-heap for the lower half of values and a min-heap for the upper half."
  - "When the total number of elements is even, the median is the arithmetic mean of the tops of both heaps. When odd, it is the top of the larger heap."

youtubeId: ""

solutionUrl: "/solutions/find-median-from-data-stream-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "stream = [5, 15, 1, 3]"
    output: "[5.0, 10.0, 5.0, 4.0]"
    explanation: "After 5: median is 5.0. After 15: median is (5+15)/2 = 10.0. After 1: [1, 5, 15] median is 5.0. After 3: [1, 3, 5, 15] median is (3+5)/2 = 4.0."
  - input: "stream = [2, 3, 4]"
    output: "[2.0, 2.5, 3.0]"
    explanation: "After 2: 2.0. After 3: 2.5. After 4: 3.0."

constraints:
  - "1 <= stream.length <= 10^5"
  - "-10^5 <= stream[i] <= 10^5"

realWorld:
  - title: "Real-Time Telemetry P50 Tracking"
    description: "Tracking the continuous 50th-percentile round-trip ping time across active web socket connections."
  - title: "Dynamic Load Balancing Response Time Sampling"
    description: "Computing the running median latency across microservice endpoints to avoid outlier skew in routing decisions."
  - title: "Financial Bid-Ask Spread Streaming"
    description: "Calculating moving median asset prices from high-frequency exchange order-flow books."
---
<!-- All rights reserved to CSRGO DSA -->

Given a stream of integers arriving sequentially as an array `stream`, compute and return the median value after each element is added.

If the number of elements processed so far is odd, the median is the middle value. If the number of elements is even, the median is the arithmetic mean of the two middle values.
