---
title: "Ceil and Floor"
date: 2026-09-25T22:49:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CeilAndFloor/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CeilAndFloor/engineering"

hints:
  - "Maintain low and high pointers and execute binary search over the sorted array."
  - "When nums[mid] is less than target, nums[mid] is a candidate for floor; update floor and search right. When nums[mid] is greater than target, nums[mid] is a candidate for ceil; update ceil and search left."

youtubeId: ""

solutionUrl: "/solutions/ceil-and-floor-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [10, 20, 30, 40, 50], target = 25"
    output: "[30, 20]"
    explanation: "30 is the smallest element >= 25 (ceil) and 20 is the greatest element <= 25 (floor)."
  - input: "nums = [10, 20, 30, 40, 50], target = 5"
    output: "[10, -1]"
    explanation: "10 is the ceil, while floor does not exist because all elements are greater than 5."

constraints:
  - "0 <= nums.length <= 10^5"
  - "1 <= nums[i], target <= 10^9"
  - "nums is sorted in ascending order."

realWorld:
  - title: "Ride Fare Tier & Surge Pricing"
    description: "Determining the closest lower and upper pricing brackets based on travel distance or real-time surge factor."
  - title: "Database B-Tree Range Proximity"
    description: "Locating the bounding low-key and high-key index records for range query optimization in relational database storage engines."
  - title: "Network Bandwidth QoS Allocation"
    description: "Snapping client traffic consumption to the nearest lower (guaranteed minimum) and upper (peak allowable) network profile tiers."
---
<!-- All rights reserved to CSRGO DSA -->

Given a sorted array of integers `nums` and a target value `target`:

- **Ceil** is defined as the smallest element in `nums` that is greater than or equal to `target`. If no such element exists, ceil is `-1`.
- **Floor** is defined as the greatest element in `nums` that is smaller than or equal to `target`. If no such element exists, floor is `-1`.

Write an algorithm with $O(\log n)$ runtime complexity to find the ceil and floor of `target`, and return an array of size 2 containing `[ceil, floor]`.
