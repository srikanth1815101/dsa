---
title: "Jump Game"
date: 2026-10-01T02:44:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Greedy", "Dynamic Programming"]
companies: ["Amazon", "Adobe", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JumpGame/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JumpGame/engineering"

hints:
  - "Track the furthest index you can reach as you iterate through the array."
  - "If the current index exceeds your maximum reachable index, you are stuck and can never proceed."

youtubeId: ""

solutionUrl: "/solutions/jump-game-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2,3,1,1,4]"
    output: "true"
    explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
  - input: "nums = [3,2,1,0,4]"
    output: "false"
    explanation: "You will always arrive at index 3 where jump length is 0, making reaching the last index impossible."

constraints:
  - "1 <= nums.length <= 10^4"
  - "0 <= nums[i] <= 10^5"

realWorld:
  - title: "Electric Vehicle Charging Reachability"
    description: "Evaluating if an EV can reach consecutive charging stations along an interstate highway route."
  - title: "Buffer Pacing Network Streaming"
    description: "Ensuring continuous video playback buffer sufficiency without causing player stall."
  - title: "Drone Battery Hop Feasibility"
    description: "Verifying whether delivery drones can hop between relay landing pads without exhausting charge."
weight: 105
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` *if you can reach the last index, or* `false` *otherwise*.
