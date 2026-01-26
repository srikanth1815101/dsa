---
title: "Binary Search"
date: 2024-01-09T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Searching", "Binary Search"]
datastructures: ["Array"]
companies: ["Google", "Facebook", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/binary-search"
hints:
  - "The array is sorted, so we can eliminate half the search space at each step."
  - "Compare the target with the middle element."
youtubeId: "fDKgeENz-De"
solutionUrl: "/solutions/binary-search-solution/"
timeComplexity: "O(log n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [-1,0,3,5,9,12], target = 9"
    output: "4"
    explanation: "9 exists in nums and its index is 4"
  - input: "nums = [-1,0,3,5,9,12], target = 2"
    output: "-1"
    explanation: "2 does not exist in nums so return -1"
constraints:
  - "1 <= nums.length <= 10^4"
  - "-10^4 < nums[i], target < 10^4"
  - "All the integers in nums are unique"
  - "nums is sorted in ascending order"
realWorld:
  - title: "Database Indexing"
    description: "Quickly locating a record in a sorted database index (B-Trees)."
  - title: "Dictionary Lookup"
    description: "Finding a word in a physical dictionary by splitting pages."
javaTemplate: |
  class Solution {
      public int search(int[] nums, int target) {
          
      }
  }
---

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Approach

Use binary search by maintaining left and right pointers. Calculate mid and compare with target, adjusting the search space accordingly.
