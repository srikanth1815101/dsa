---
title: "Median Priority Queue"
date: 2026-09-27T11:26:00+05:30
difficulty: "Hard"
topics: ["Heap", "Design", "Divide and Conquer"]
companies: ["Amazon", "Google", "Morgan Stanley"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MedianPriorityQueue/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MedianPriorityQueue/engineering"

hints:
  - "Divide numbers into two halves: a max-heap for the smaller half and a min-heap for the larger half."
  - "Maintain the invariant that the max-heap size is either equal to or exactly one element greater than the min-heap size."

youtubeId: ""

solutionUrl: "/solutions/median-priority-queue-solution/"

timeComplexity: "O(m log n)"
spaceComplexity: "O(n)"

examples:
  - input: "operations = [\"add\", \"add\", \"peek\", \"add\", \"peek\", \"remove\", \"peek\"], values = [10, 20, 0, 30, 0, 0, 0]"
    output: "[10, 20, 20, 10]"
    explanation: "After adding 10 and 20, median is smaller middle 10. Adding 30 makes elements [10, 20, 30], median is 20. Removing returns 20, leaving [10, 30] where median is 10."
  - input: "operations = [\"add\", \"peek\", \"remove\", \"peek\"], values = [5, 0, 0, 0]"
    output: "[5, 5, -1]"
    explanation: "Adding 5 gives median 5. Removing returns 5. Peek on empty queue returns -1."

constraints:
  - "1 <= operations.length <= 10^5"
  - "operations[i] is either \"add\", \"peek\", or \"remove\""
  - "-10^9 <= values[i] <= 10^9"

realWorld:
  - title: "Real-Time Telemetry P50 Estimator"
    description: "Tracking the exact dynamic 50th-percentile network latency packet in high-frequency trading gateways."
  - title: "Dynamic Sensor Reading Calibration"
    description: "Maintaining a robust median filtering window across continuous environmental IoT telemetry."
  - title: "Sliding Window Video Frame Brightness Normalization"
    description: "Determining median pixel intensity levels on video streams to prevent flashing under abrupt lighting shifts."
---
<!-- All rights reserved to CSRGO DSA -->

Design a Median Priority Queue data structure that supports inserting integers, peeking at the current median, and removing the current median in logarithmic time.

If the number of elements is odd, the median is the unique middle element. If the number of elements is even, the median is defined as the smaller of the two middle elements.

You are given an array of `operations` and an array of corresponding integer `values`. Process the operations and return an array containing the results of all `"peek"` and `"remove"` operations. If the queue is empty during a `"peek"` or `"remove"` operation, return `-1`.
