---
title: "Longest Subarray with At Most K Distinct Characters"
date: 2026-10-01T02:16:00+05:30
difficulty: "Medium"
topics: ["Strings", "Sliding Window", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestSubarrayWithAtMostKDistinctCharacters/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestSubarrayWithAtMostKDistinctCharacters/engineering"

hints:
  - "Use a sliding window with two pointers (left and right) and a frequency map tracking character counts."
  - "Expand right pointer; when map size exceeds K, shrink left pointer until distinct count returns to at most K."

youtubeId: ""

solutionUrl: "/solutions/longest-subarray-with-at-most-k-distinct-characters-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(k)"

examples:
  - input: "s = \"eceba\"`, `k = 2"
    output: "** `3` **"
    explanation: "** The substring is `\"ece\"` which contains 2 distinct characters (`'e'` and `'c'`) and has length 3."
  - input: "s = \"aa\"`, `k = 1"
    output: "** `2` **"
    explanation: "** The substring is `\"aa\"` which has length 2."

constraints:
  - "1 <= s.length <= 5 * 10^4"
  - "0 <= k <= 50"
  - "s` consists of English letters."

realWorld:
  - title: "Streaming Telemetry Protocol Windowing"
    description: "Finding the longest continuous sensor transmission window containing at most K distinct event codes."
  - title: "Video Stream Encoding Keyframe Buffering"
    description: "Buffering consecutive video frames containing at most K distinct palette changes before forcing an I-frame."
  - title: "Search Query Log Session Segmentation"
    description: "Segmenting continuous user search sessions that focus on at most K distinct topic taxonomies."
weight: 77
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s` and an integer `k`, return the **length of the longest substring** (or contiguous subarray of characters) that contains at most `k` distinct characters.
