---
title: "Check Subsequence"
date: 2026-10-01T01:10:00+05:30
difficulty: "Easy"
topics: ["Strings", "Two Pointers", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CheckSubsequence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CheckSubsequence/engineering"

hints:
  - "Use two pointers, one scanning through s and the other scanning through t."
  - "Whenever characters match, advance the pointer in s. If the pointer in s reaches its length, s is a subsequence."

youtubeId: ""

solutionUrl: "/solutions/check-subsequence-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"abc\", t = \"ahbgdc\""
    output: "true"
    explanation: "\"abc\" can be obtained from \"ahbgdc\" by deleting 'h', 'g', and 'd'."
  - input: "s = \"axc\", t = \"ahbgdc\""
    output: "false"
    explanation: "'x' does not appear in t, so \"axc\" cannot be formed."

constraints:
  - "0 <= s.length <= 100"
  - "0 <= t.length <= 10^4"
  - "s and t consist only of lowercase English letters"

realWorld:
  - title: "Fuzzy Search Autocomplete"
    description: "Verifying whether an abbreviated user keystroke query matches command identifiers in command palettes."
  - title: "Bioinformatics Motif Matching"
    description: "Detecting preserved gene segment order across evolutionary spliced RNA sequence transcripts."
  - title: "Log Sequence Validation"
    description: "Checking whether a critical sequence of state transitions occurred in chronological order within an event stream."
weight: 11
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`, or `false` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).
