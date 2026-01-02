---
title: "Trapping Rain Water"
date: 2024-01-16T10:00:00Z
difficulty: "Hard"
topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack"]
datastructures: ["Array", "Stack"]
companies: ["Google", "Amazon", "Facebook"]
path: "Mastery"
starterCode: "/dsa/files/TrappingRainWater.java"
hints:
  - "For each element, find the max height to its left and right."
  - "Water trapped at i = min(max_left, max_right) - height[i]."
youtubeId: "ZI2z5pq0TqA"
solutionUrl: "/solutions/trapping-rain-water/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]"
    output: "6"
    explanation: "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped."
  - input: "height = [4,2,0,3,2,5]"
    output: "9"
constraints:
  - "n == height.length"
  - "1 <= n <= 2 * 10^4"
  - "0 <= height[i] <= 10^5"
javaTemplate: |
  public class Solution {
      public int trap(int[] height) {
          // Your code here
          return 0;
      }
  }
---

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

## Approach

Use Two Pointers. Maintain `left_max` and `right_max` as you traverse from both ends inward.
