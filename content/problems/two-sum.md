---
title: "Two Sum"
date: 2024-01-01T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Hash Table"]
companies: ["Google", "Amazon", "Microsoft"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/two-sum"
hints:
  - "Use a Hash Map to store numbers you've seen."
  - "For each number x, check if (target - x) exists in the map."
youtubeId: "KLlXCFG5TnA"
solutionUrl: "/solutions/two-sum-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "nums = [2,7,11,15], target = 9"
    output: "[0,1]"
    explanation: "nums[0] + nums[1] = 2 + 7 = 9, so we return indices [0, 1]."
  - input: "nums = [3,2,4], target = 6"
    output: "[1,2]"
    explanation: "nums[1] + nums[2] = 2 + 4 = 6, so we return indices [1, 2]."
constraints:
  - "2 <= nums.length <= 10^4"
  - "-10^9 <= nums[i] <= 10^9"
  - "-10^9 <= target <= 10^9"
  - "Only one valid answer exists."
realWorld:
  - title: "E-commerce Cart"
    description: "Finding two products that add up to a specific gift card balance."
  - title: "Financial Auditing"
    description: "Identifying two transactions that sum to a specific discrepancy value."
  - title: "Pair Matching Systems"
    description: "Matching users based on complementary preferences in dating apps."
---

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.
