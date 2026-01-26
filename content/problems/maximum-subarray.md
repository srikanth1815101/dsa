---
title: "Maximum Subarray"
date: 2024-01-05T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Dynamic Programming", "Divide and Conquer"]
companies: ["Google", "Facebook", "Microsoft"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/maximum-subarray"
hints:
  - "If the running sum becomes negative, it's better to start fresh."
  - "Consider Kadane's algorithm for an O(n) solution."
youtubeId: "5WZl3MMT0Eg"
solutionUrl: "/solutions/maximum-subarray-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [-2,1,-3,4,-1,2,1,-5,4]"
    output: "6"
    explanation: "The subarray [4,-1,2,1] has the largest sum = 6."
  - input: "nums = [5,4,-1,7,8]"
    output: "23"
    explanation: "The entire array [5,4,-1,7,8] has the largest sum = 23."
constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
realWorld:
  - title: "Stock Market Analysis"
    description: "Finding the period with the highest cumulative gain in stock prices."
  - title: "Signal Processing"
    description: "Detecting the strongest continuous signal in noisy data."
  - title: "Revenue Analysis"
    description: "Identifying the most profitable consecutive period in sales data."
---

Given an integer array `nums`, find the **subarray** with the largest sum, and return its sum.

A **subarray** is a contiguous non-empty sequence of elements within an array.
