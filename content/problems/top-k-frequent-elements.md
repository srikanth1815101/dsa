---
title: "Top K Frequent Elements"
date: 2026-09-27T11:28:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopKFrequentElements/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopKFrequentElements/engineering"

hints:
  - "Count the frequency of each element using a hash map."
  - "Use a min-heap ordered by frequency of size k, or bucket sort, to isolate the k most frequent elements."

youtubeId: ""

solutionUrl: "/solutions/top-k-frequent-elements-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 1, 1, 2, 2, 3], k = 2"
    output: "[1, 2]"
    explanation: "1 appears 3 times and 2 appears 2 times. The 2 most frequent elements are [1, 2]."
  - input: "nums = [1], k = 1"
    output: "[1]"
    explanation: "1 is the only element, so it is the most frequent."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
  - "k is in the range [1, the number of unique elements in the array]."
  - "It is guaranteed that the answer is unique."

realWorld:
  - title: "Trending Search Query Aggregator"
    description: "Surfacing the top-k most popular search phrases submitted across distributed web query clusters."
  - title: "E-Commerce Most Viewed Products"
    description: "Extracting the top-k highest frequency product ID clicks from real-time customer session telemetry."
  - title: "Network Intrusion Port Activity Detection"
    description: "Detecting the most frequently targeted destination port numbers across firewall packet logs."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

To ensure deterministic testing, return the resulting $k$ elements sorted in ascending numerical order.
