---
title: "Count Sort"
date: 2026-09-27T19:54:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountSort/engineering"

hints:
  - "Find the minimum and maximum values in the array to determine the frequency table size range = max - min + 1."
  - "Transform the frequency array into a prefix sum array to determine each element's exact final index, then iterate backwards through the original array to maintain stability."

youtubeId: ""

solutionUrl: "/solutions/count-sort-solution/"

timeComplexity: "O(n + k)"
spaceComplexity: "O(n + k)"

examples:
  - input: "arr = [9, 6, 3, 5, 3, 4, 3, 9, 6, 4, 6, 5, 8, 9, 9]"
    output: "[3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 8, 9, 9, 9, 9]"
    explanation: "Frequencies of each value within the bounded range are tabulated and mapped into sorted output positions."
  - input: "arr = [4, 2, 2, 8, 3, 3, 1]"
    output: "[1, 2, 2, 3, 3, 4, 8]"
    explanation: "The elements are sorted in non-decreasing order in linear time without element-to-element comparisons."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^5 <= arr[i] <= 10^5"
  - "The range (max - min) <= 10^5"

realWorld:
  - title: "Census Age and Demographic Sorting"
    description: "Sorting millions of citizen survey responses by age (0-120) in O(n) linear time with minimal memory overhead."
  - title: "Subroutine in Radix Sorting"
    description: "Serving as the stable digit-by-digit sorting engine inside Radix Sort across fixed-width string keys and integer word vectors."
  - title: "E-Commerce Product Rating Bucketization"
    description: "Sorting customer reviews and storefront ratings bounded between 1 and 5 stars instantaneously without comparison overhead."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Counting Sort algorithm.

Counting sort is a non-comparison-based sorting technique that operates in $O(n + k)$ time by counting the occurrences of each distinct key within the array. It computes prefix sums over the frequency array to position each value into a sorted output array while strictly preserving stability.

Return the sorted array.
