---
title: "Kth Largest Element"
date: 2026-09-26T18:54:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Quick Select"]
companies: ["Meta", "Amazon", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KthLargestElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KthLargestElement/engineering"

hints:
  - "Instead of sorting the entire array in O(n log n), consider keeping track of only the k largest elements seen so far."
  - "Use a min-priority queue (min-heap) of size k. For each element in nums, offer it to the heap. If heap size exceeds k, poll the smallest element. The root of the heap will be the k-th largest element."

youtubeId: ""

solutionUrl: "/solutions/kth-largest-element-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [3, 2, 1, 5, 6, 4], k = 2"
    output: "5"
    explanation: "When sorted in descending order: [6, 5, 4, 3, 2, 1]. The 2nd largest element is 5."
  - input: "nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4"
    output: "4"
    explanation: "When sorted in descending order: [6, 5, 5, 4, 3, 3, 2, 2, 1]. The 4th largest element is 4."

constraints:
  - "1 <= k <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"

realWorld:
  - title: "Real-Time Leaderboard Qualification"
    description: "Determining the minimum score cutoff required to qualify for top-K global game player rankings."
  - title: "Network Tail Latency SLA Tracking"
    description: "Computing top latency percentiles (e.g. 99th percentile slowest server request responses) over sliding telemetry streams."
  - title: "Multi-Unit Auction Clearing Prices"
    description: "Finding the clearing cutoff bid among hundreds of thousands of incoming real-time bids for limited product allocations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and an integer `k`, return the $k^{\text{th}}$ largest element in the array.

Note that it is the $k^{\text{th}}$ largest element in sorted order, not the $k^{\text{th}}$ distinct element.

Can you solve it without sorting the entire array?
