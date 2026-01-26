---
title: "Product of Array Except Self"
date: 2024-01-11T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Prefix Sum"]
companies: ["Amazon", "Facebook", "Apple"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/product-of-array-except-self"
hints:
  - "Think about prefix and suffix products."
  - "Can you compute the result without using division?"
youtubeId: "bNvIQI2wAjk"
solutionUrl: "/solutions/product-of-array-except-self-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [1,2,3,4]"
    output: "[24,12,8,6]"
    explanation: "answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, answer[2] = 1*2*4 = 8, answer[3] = 1*2*3 = 6"
  - input: "nums = [-1,1,0,-3,3]"
    output: "[0,0,9,0,0]"
    explanation: "Any product containing the 0 at index 2 becomes 0."
constraints:
  - "2 <= nums.length <= 10^5"
  - "-30 <= nums[i] <= 30"
  - "The product of any prefix or suffix fits in a 32-bit integer"
realWorld:
  - title: "Financial Analysis"
    description: "Calculating contribution of each factor excluding its own influence."
  - title: "Image Processing"
    description: "Computing normalized values where each pixel is relative to all others."
  - title: "Performance Metrics"
    description: "Calculating team performance excluding individual contributions."
---

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the **product of all the elements** of `nums` **except** `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in **O(n)** time and **without using the division operation**.
