---
title: "Majority Element"
date: 2026-09-26T18:53:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Hashing", "Divide and Conquer"]
companies: ["Microsoft", "Amazon", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MajorityElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MajorityElement/engineering"

hints:
  - "A hash map can count element frequencies in O(n) space. Can you find a way to track the majority candidate in O(1) space?"
  - "Use the Boyer-Moore Voting Algorithm: maintain a candidate and a counter. Whenever the counter hits zero, designate the current element as candidate."

youtubeId: ""

solutionUrl: "/solutions/majority-element-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [3, 2, 3]"
    output: "3"
    explanation: "3 appears 2 times, which is strictly greater than 3 / 2 = 1."
  - input: "nums = [2, 2, 1, 1, 1, 2, 2]"
    output: "2"
    explanation: "2 appears 4 times, which is strictly greater than 7 / 2 = 3."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^9 <= nums[i] <= 10^9"
  - "The majority element is guaranteed to exist in the array."

realWorld:
  - title: "Distributed Consensus Quorum"
    description: "Verifying whether a proposed state change or block commit has attained the strict majority (> 50%) validation quorum across network replicas."
  - title: "Triple Modular Redundancy (TMR)"
    description: "Determining the true sensor telemetry reading among triplicated redundant flight control microcontrollers."
  - title: "Real-Time Streaming Poll Aggregation"
    description: "Detecting the dominant voting choice in high-concurrency live interactive broadcast streams without holding full frequency maps."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `nums` of size `n`, return the majority element.

The **majority element** is the element that appears more than $\lfloor n / 2 \rfloor$ times. You may assume that the majority element always exists in the array.
