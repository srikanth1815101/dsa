---
title: "Maximum Subarray"
date: 2024-01-04T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Dynamic Programming", "Divide and Conquer"]
datastructures: ["Array"]
companies: ["Google", "Facebook", "Microsoft", "LinkedIn"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/maximum-subarray"
hints:
  - "If the sum of a subarray is negative, it cannot contribute to the maximum sum of a larger subarray."
  - "Use Kadane's algorithm."
youtubeId: "5WZl3MMT0Eg"
solutionUrl: "/solutions/maximum-subarray-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [-2,1,-3,4,-1,2,1,-5,4]"
    output: "6"
    explanation: "The subarray [4,-1,2,1] has the largest sum 6"
  - input: "nums = [1]"
    output: "1"
  - input: "nums = [5,4,-1,7,8]"
    output: "23"
constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
realWorld:
  - title: "Stock Market Analysis"
    description: "Finding the contiguous period with the highest gain (or least loss) in stock prices."
  - title: "Genomic Sequence Analysis"
    description: "Identifying the segment of DNA with the highest density of a specific marker."
javaTemplate: |
  class Solution {
      public int maxSubArray(int[] nums) {
          
      }
  }
---

Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

## Approach

Use Kadane's Algorithm: maintain a running sum and update the maximum sum whenever the running sum exceeds it. Reset running sum to 0 if it becomes negative.
