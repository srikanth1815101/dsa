---
title: "Longest Consecutive Sequence"
date: 2026-09-27T11:23:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Hashing"]
companies: ["Google", "Facebook", "Amazon"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestConsecutiveSequence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestConsecutiveSequence/engineering"

hints:
  - "Insert all unique values into a hash set to enable O(1) membership lookups."
  - "Only start counting a streak from a number if its predecessor (num - 1) is not present in the set."

youtubeId: ""

solutionUrl: "/solutions/longest-consecutive-sequence-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [100, 4, 200, 1, 3, 2]"
    output: "4"
    explanation: "The longest consecutive sequence is [1, 2, 3, 4], which has a length of 4."
  - input: "nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]"
    output: "9"
    explanation: "The consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8], having length 9."

constraints:
  - "0 <= nums.length <= 10^5"
  - "-10^9 <= nums[i] <= 10^9"

realWorld:
  - title: "User Activity Streak Tracking"
    description: "Computing the maximum consecutive daily login streaks across unordered distributed user activity logs."
  - title: "Network Packet Reassembly Windows"
    description: "Determining the largest continuous segment of consecutive received sequence packet IDs in out-of-order networks."
  - title: "Genome Contig Sequence Assembly"
    description: "Finding the longest consecutive sequence of overlapping DNA marker indices in metagenomic sequencing pipelines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in $O(n)$ time.
