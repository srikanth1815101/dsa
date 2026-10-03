---
title: "First Unique Character in String"
date: 2026-10-01T01:11:00+05:30
difficulty: "Easy"
topics: ["Strings", "Hashing", "Queue"]
companies: ["Amazon", "Goldman Sachs", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FirstUniqueCharacterInString/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FirstUniqueCharacterInString/engineering"

hints:
  - "Count the frequency of each character across the entire string in a first pass."
  - "In a second pass through the string, return the index of the first character with a frequency of exactly one."

youtubeId: ""

solutionUrl: "/solutions/first-unique-character-in-string-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"leetcode\""
    output: "0"
    explanation: "The character 'l' at index 0 is the first character that does not occur anywhere else in the string."
  - input: "s = \"loveleetcode\""
    output: "2"
    explanation: "'l' and 'o' repeat, so 'v' at index 2 is the first unique character."

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists of only lowercase English letters."
  - "If no unique character exists in the string, return -1."

realWorld:
  - title: "Stream Data De-duplication Flagging"
    description: "Finding the first unique transaction sequence token in high-volume banking ingest pipelines."
  - title: "Communication Protocol Header Validation"
    description: "Identifying distinct non-colliding routing markers within multiplexed telemetry packets."
  - title: "Cache Eviction Disambiguation"
    description: "Detecting unique memory access keys within transient cache request traces for frequency estimation."
weight: 12
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.
