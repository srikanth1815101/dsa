---
title: "Quick Select"
date: 2026-09-27T19:53:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Divide and Conquer"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/QuickSelect/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/QuickSelect/engineering"

hints:
  - "Partition the array around a chosen pivot just like in Quick Sort. The settled pivot lands at its exact 0-indexed sorted position pi."
  - "Compare pi with target index k - 1. If pi matches, return arr[pi]. If pi > k - 1, recurse only into the left half; otherwise recurse into the right half."

youtubeId: ""

solutionUrl: "/solutions/quick-select-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(log n)"

examples:
  - input: "arr = [7, 10, 4, 3, 20, 15], k = 3"
    output: "7"
    explanation: "The sorted array is [3, 4, 7, 10, 15, 20]. The 3rd smallest element (1-based index) is 7."
  - input: "arr = [12, 3, 5, 7, 19], k = 2"
    output: "5"
    explanation: "The sorted array is [3, 5, 7, 12, 19]. The 2nd smallest element is 5."

constraints:
  - "1 <= k <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "All values fit within 32-bit signed integer limits"

realWorld:
  - title: "Streaming Percentile and Median Extraction"
    description: "Finding the 50th or 99th percentile query latency without sorting the entire dataset, executing in linear expected time."
  - title: "E-Commerce Top-K Recommendation Cutoffs"
    description: "Finding the score threshold separating the top-k highest grossing product items from millions of catalog listings."
  - title: "Image Processing Median Filtering"
    description: "Computing the local median pixel intensity across sliding 2D convolution windows to eliminate salt-and-pepper noise in signal processing."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and an integer `k`, find and return the $k^{\text{th}}$ smallest element in the array using the Quick Select algorithm.

Quick Select is a selection algorithm related to Quick Sort. Instead of recursing into both partitioned halves, it inspects the pivot index and recurses exclusively into the single partition guaranteed to contain the $k^{\text{th}}$ smallest element, achieving an expected linear $O(n)$ time complexity.

Return the $k^{\text{th}}$ smallest element.
