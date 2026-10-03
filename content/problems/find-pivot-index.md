---
title: "Find Pivot Index"
date: 2026-10-01T02:24:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Prefix Sum"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FindPivotIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FindPivotIndex/engineering"

hints:
  - "Calculate the total sum of the array first."
  - "Iterate through the array maintaining leftSum; the right sum is (total - leftSum - nums[i]). If leftSum == rightSum, return i."

youtubeId: ""

solutionUrl: "/solutions/find-pivot-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 7, 3, 6, 5, 6]"
    output: "** `3` **"
    explanation: "** The pivot index is 3. Left sum = `nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11` Right sum = `nums[4] + nums[5] = 5 + 6 = 11`"
  - input: "nums = [1, 2, 3]"
    output: "** `-1` **"
    explanation: "** There is no index that satisfies the condition where the left sum equals the right sum."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-1000 <= nums[i] <= 1000"
  - "If no pivot index exists, return -1. If multiple exist, return the leftmost one."
realWorld:
  - title: "Distributed Load Balancer Shard Partitioning"
    description: "Finding a pivot server in an ordered pipeline where upstream processing load equals downstream processing load."
  - title: "Structural Bridge Center-of-Mass Balancing"
    description: "Calculating the balance pivot point on bridge spans where load distributions on either side are identical."
  - title: "Dual-Headed Disk Arm Positioning"
    description: "Positioning dual read heads on disk platters where track seek times to left and right partitions are equal."
weight: 85
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, compute the **pivot index** of this array.

The pivot index is the index where the sum of all elements strictly to the left of the index is equal to the sum of all elements strictly to its right.

If the index is at the left edge (`0`), the left sum is considered `0` because there are no elements to the left. Likewise, if the index is at the right edge (`nums.length - 1`), the right sum is considered `0`.

Return the **leftmost** pivot index. If no such index exists, return `-1`.
