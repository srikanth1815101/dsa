---
title: "Next Greater Element"
date: 2026-09-27T10:03:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Adobe", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NextGreaterElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NextGreaterElement/engineering"

hints:
  - "Traverse the array from right to left while maintaining a monotonic stack of values seen so far."
  - "Pop all elements from the stack that are smaller than or equal to the current element; the top element left is the next greater value."

youtubeId: ""

solutionUrl: "/solutions/next-greater-element-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [4, 5, 2, 25]"
    output: "[5, 25, 25, -1]"
    explanation: "For 4, next greater is 5. For 5, next greater is 25. For 2, next greater is 25. For 25, no greater element exists to the right, so -1."
  - input: "arr = [13, 7, 6, 12]"
    output: "[-1, 12, 12, -1]"
    explanation: "For 13, no greater element exists to the right. For 7 and 6, the next greater element to their right is 12. For 12, none exists."

constraints:
  - "1 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The returned array must have the exact same length as arr."

realWorld:
  - title: "Financial Stock Market Trend Analysis"
    description: "Financial algorithms find the next upcoming price surge day to recommend optimal asset selling times."
  - title: "Meteorological Temperature Surges"
    description: "Weather analytics platforms compute how many days until a location experiences warmer weather."
  - title: "Network Packet Latency Spikes"
    description: "Telemetry systems monitor latency logs to correlate minor latency blips with the next major threshold breach."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `arr` of integers, find the next greater element for each element in the array.

The next greater element for an element `arr[i]` is the first element to its right that is strictly greater than `arr[i]`. If no greater element exists to its right, the next greater element is defined as `-1`.

Return an array containing the next greater element for each index in `arr`.
