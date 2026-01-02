---
title: "Median of Two Sorted Arrays"
date: 2024-01-15T10:00:00Z
difficulty: "Hard"
topics: ["Array", "Binary Search", "Divide and Conquer"]
datastructures: ["Array"]
companies: ["Google", "Amazon", "Microsoft"]
path: "Mastery"
starterCode: "/dsa/files/MedianSortedArrays.java"
hints:
  - "The overall run time complexity should be O(log (m+n))."
  - "Try to find the k-th element from two sorted arrays."
youtubeId: "q6IEA26hvXc"
solutionUrl: "/solutions/median-of-two-sorted-arrays/"
timeComplexity: "O(log(m+n))"
spaceComplexity: "O(1)"
examples:
  - input: "nums1 = [1,3], nums2 = [2]"
    output: "2.00000"
    explanation: "merged array = [1,2,3] and median is 2."
  - input: "nums1 = [1,2], nums2 = [3,4]"
    output: "2.50000"
    explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
constraints:
  - "nums1.length == m"
  - "nums2.length == n"
  - "0 <= m <= 1000"
  - "0 <= n <= 1000"
  - "1 <= m + n <= 2000"
javaTemplate: |
  public class Solution {
      public double findMedianSortedArrays(int[] nums1, int[] nums2) {
          // Your code here
          return 0.0;
      }
  }
---

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

## Approach

Use Binary Search on the smaller array to partition both arrays such that elements on the left are smaller than elements on the right.
