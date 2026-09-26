---
title: "Equilibrium Index"
date: 2026-09-26T19:09:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Prefix Sum"]
companies: ["Amazon", "Adobe", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/EquilibriumIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/EquilibriumIndex/engineering"

hints:
  - "Compute the total sum of all elements in the array in a single initial pass."
  - "In a second pass, maintain a running leftSum. At index i, rightSum is simply totalSum - leftSum - nums[i]. If leftSum == rightSum, return i as the leftmost equilibrium index."

youtubeId: ""

solutionUrl: "/solutions/equilibrium-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 7, 3, 6, 5, 6]"
    output: "3"
    explanation: "At index 3: left sum = nums[0] + nums[1] + nums[2] = 11, right sum = nums[4] + nums[5] = 11."
  - input: "nums = [1, 2, 3]"
    output: "-1"
    explanation: "There is no index where the left sum equals the right sum."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-1000 <= nums[i] <= 1000"

realWorld:
  - title: "Pipeline Load Balancing Fulcrum"
    description: "Splitting sequential asynchronous tasks into two equal-weight workload partitions for dual-worker execution."
  - title: "Structural Load Center of Moment"
    description: "Determining the center of mass or equilibrium point where opposing bending forces neutralize along a cantilever."
  - title: "Financial Ledger Invariant Point"
    description: "Locating the transition date in a chronological audit ledger where cumulative inflows match outflows."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums`, calculate the **equilibrium index** (also known as pivot index) of this array.

The **equilibrium index** is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return the **leftmost equilibrium index**. If no such index exists, return `-1`.
