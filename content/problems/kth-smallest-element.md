---
title: "Kth Smallest Element"
date: 2026-09-26T18:55:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Quick Select"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KthSmallestElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KthSmallestElement/engineering"

hints:
  - "To find the k-th smallest element, how can a heap help without storing all n elements?"
  - "Maintain a max-priority queue (max-heap) of size k. For each number in nums, offer it to the heap. If the heap size exceeds k, poll the maximum element. The root will be the k-th smallest element."

youtubeId: ""

solutionUrl: "/solutions/kth-smallest-element-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [7, 10, 4, 3, 20, 15], k = 3"
    output: "7"
    explanation: "When sorted in ascending order: [3, 4, 7, 10, 15, 20]. The 3rd smallest element is 7."
  - input: "nums = [7, 10, 4, 20, 15], k = 4"
    output: "15"
    explanation: "When sorted in ascending order: [4, 7, 10, 15, 20]. The 4th smallest element is 15."

constraints:
  - "1 <= k <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"

realWorld:
  - title: "Cloud Service Latency Benchmark"
    description: "Determining the k-th lowest response latency threshold across thousands of microservice health check queries."
  - title: "Reverse Auction Lowest Bid Selection"
    description: "Selecting the k-th lowest procurement vendor proposal for multi-supplier contract allocations."
  - title: "Ray Tracing Nearest-K Hit Distance"
    description: "Locating the nearest k surface intersections along a light ray in 3D physics rendering engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and an integer `k`, return the $k^{\text{th}}$ smallest element in the array.

Note that it is the $k^{\text{th}}$ smallest element in sorted order, not the $k^{\text{th}}$ distinct element.

Can you solve it in $O(n \log k)$ runtime complexity?
