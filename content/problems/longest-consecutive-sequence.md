---
title: "Longest Consecutive Sequence"
date: 2026-09-26T18:56:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Hashing"]
companies: ["Google", "Facebook", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestConsecutiveSequence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestConsecutiveSequence/engineering"

hints:
  - "Sorting takes O(n log n), which violates the linear time requirement. Can you use a HashSet for O(1) membership lookups?"
  - "Only attempt to build a sequence starting from a number x if (x - 1) is NOT present in the set. This ensures each consecutive sequence is traversed only once, achieving O(n) total runtime."

youtubeId: ""

solutionUrl: "/solutions/longest-consecutive-sequence-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [100, 4, 200, 1, 3, 2]"
    output: "4"
    explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4."
  - input: "nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]"
    output: "9"
    explanation: "The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Its length is 9."

constraints:
  - "0 <= nums.length <= 10^5"
  - "-10^9 <= nums[i] <= 10^9"

realWorld:
  - title: "Network Packet Reassembly"
    description: "Determining the longest contiguous sequence of packet frame identifiers received out-of-order across UDP streams."
  - title: "Trading Activity Streak Detection"
    description: "Identifying the longest consecutive day streak of profitable trades from unsorted transaction ledgers."
  - title: "App Gamification Check-In Streaks"
    description: "Computing user login and check-in streak milestones from unordered daily activity epoch timestamps."
---
<!-- All rights reserved to CSRGO DSA -->

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in $O(n)$ time.
