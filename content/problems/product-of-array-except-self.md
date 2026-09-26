---
title: "Product of Array Except Self"
date: 2026-09-26T18:52:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Prefix Sum"]
companies: ["Amazon", "Facebook", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ProductOfArrayExceptSelf/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ProductOfArrayExceptSelf/engineering"

hints:
  - "Think about computing running prefix products from left to right, and running suffix products from right to left."
  - "You can store the prefix products directly in the result array, then iterate backwards while keeping a running suffix product accumulator."

youtubeId: ""

solutionUrl: "/solutions/product-of-array-except-self-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 2, 3, 4]"
    output: "[24, 12, 8, 6]"
    explanation: "For index 0: 2*3*4=24; index 1: 1*3*4=12; index 2: 1*2*4=8; index 3: 1*2*3=6."
  - input: "nums = [-1, 1, 0, -3, 3]"
    output: "[0, 0, 9, 0, 0]"
    explanation: "The element at index 2 (where nums[2] is 0) receives the product of all non-zero numbers: (-1)*1*(-3)*3 = 9."

constraints:
  - "2 <= nums.length <= 10^5"
  - "-30 <= nums[i] <= 30"
  - "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."

realWorld:
  - title: "Jackknife Resampling & Normalization"
    description: "Calculating leave-one-out statistical metrics and geometric means without recomputing total product aggregates."
  - title: "Distributed Sensor Cross-Calibration"
    description: "Evaluating each sensor node against the combined product or probability scaling of all peer nodes."
  - title: "Financial Portfolio Synthetic Exposure"
    description: "Deriving risk exposure factors when systematically isolating and omitting single asset holdings from a portfolio."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a **32-bit** integer.

You must write an algorithm that runs in $O(n)$ time and without using the division operation.
