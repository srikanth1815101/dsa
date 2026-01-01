---
title: "Merge Sorted Arrays"
date: 2024-01-05T10:00:00Z
difficulty: "Easy"
topics: ["Array", "Sorting", "Two Pointers"]
datastructures: ["Array"]
companies: ["Meta", "Amazon", "Microsoft"]
starterCode: "/dsa/files/MergeSortedArray.java"
hints:
  - "You can reverse the order of iteration."
  - "Use three pointers starting from the end of the arrays."
youtubeId: "P1Ic85RarKY"
solutionUrl: "/solutions/merge-sorted-arrays-solution/"
timeComplexity: "O(m + n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3"
    output: "[1,2,2,3,5,6]"
    explanation: "The arrays we are merging are [1,2,3] and [2,5,6]. The result is [1,2,2,3,5,6]"
  - input: "nums1 = [1], m = 1, nums2 = [], n = 0"
    output: "[1]"
constraints:
  - "nums1.length == m + n"
  - "nums2.length == n"
  - "0 <= m, n <= 200"
  - "1 <= m + n <= 200"
javaTemplate: |
  public class Solution {
      public void merge(int[] nums1, int m, int[] nums2, int n) {
          // Your code here
      }
  }
---

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

## Approach

Start from the end of both arrays and work backwards, placing the larger element at the end of nums1.
