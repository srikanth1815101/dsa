---
title: "Furthest Building You Can Reach"
date: 2026-10-01T02:02:00+05:30
difficulty: "Medium"
topics: ["Heap", "Greedy"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FurthestBuildingYouCanReach/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FurthestBuildingYouCanReach/engineering"

hints:
  - "Use a Min-Heap to record the height jumps where ladders are used."
  - "When the number of jumps exceeds the available ladders, pop the smallest jump from the heap and use bricks for it; stop when bricks are exhausted."

youtubeId: ""

solutionUrl: "/solutions/furthest-building-you-can-reach-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "heights = [4, 2, 7, 6, 9, 14, 12], bricks = 5, ladders = 1"
    output: "4"
    explanation: "Starting at 0: - Go to 1 without bricks or ladders since 4 >= 2. - Go to 2 using 5 bricks since 2 < 7. - Go to 3 without bricks or ladders since 7 >= 6. - Go to 4 using 1 ladder since 6 < 9. You cannot reach building 5 because you need either 5 bricks or 1 ladder and you have neither."
  - input: "heights = [4, 12, 2, 7, 3, 18, 20, 3, 19], bricks = 10, ladders = 2"
    output: "7"
    explanation: "Result is 7."

constraints:
  - "1 <= heights.length <= 10^5"
  - "1 <= heights[i] <= 10^6"
  - "0 <= bricks <= 10^9"
  - "0 <= ladders <= heights.length"

realWorld:
  - title: "Autonomous Drone Battery-Boost Optimization"
    description: "Navigating mountainous terrain using limited high-output battery boosts for peak climbs and solar glides for small climbs."
  - title: "Resource Allocation in Emergency Disaster Relief"
    description: "Allocating heavy airlift helicopters to highest mountain roadblocks while deploying ground bulldozers for minor debris."
  - title: "Datacenter Burst Capacity Management"
    description: "Allocating reserved expensive bare-metal servers to largest traffic spikes while servicing moderate surges with auto-scaling VMs."
weight: 63
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `heights` representing the heights of buildings, some `bricks`, and some `ladders`.

You start your journey from building `0` and move to the next building by possibly using bricks or ladders.

While moving from building `i` to building `i + 1` (0-indexed):
- If the current building's height is **greater than or equal to** the next building's height, you do **not** need a ladder or bricks.
- If the current building's height is **less than** the next building's height, you can either use **one ladder** or `(heights[i + 1] - heights[i])` **bricks**.

Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.
