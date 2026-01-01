---
title: "Two Sum"
date: 2024-01-01T10:00:00Z
difficulty: "Easy"
topics: ["Array", "Hash Table"]
datastructures: ["Array", "HashMap"]
companies: ["Google", "Amazon", "Microsoft"]
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
starterCode: "/dsa/files/TwoSum.java"
hints:
  - "Try using a Hash Map to store numbers you've already seen."
  - "For each number x, check if (target - x) exists in the map."
youtubeId: "KLlXCFG5TnA"
solutionUrl: "/solutions/two-sum-solution/"
examples:
  - input: "nums = [2,7,11,15], target = 9"
    output: "[0,1]"
    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
  - input: "nums = [3,2,4], target = 6"
    output: "[1,2]"
    explanation: "nums[1] + nums[2] == 6"
constraints:
  - "2 <= nums.length <= 10^4"
  - "-10^9 <= nums[i] <= 10^9"
  - "-10^9 <= target <= 10^9"
  - "Only one valid answer exists"
javaTemplate: |
  public class Solution {
      public int[] twoSum(int[] nums, int target) {
          // Your code here
          return new int[]{};
      }
  }
---

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Approach

Use a HashMap to store the complement of each number as you iterate through the array. For each number, check if its complement exists in the map.
