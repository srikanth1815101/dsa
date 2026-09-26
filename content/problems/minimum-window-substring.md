---
title: "Minimum Window Substring"
date: 2026-09-26T19:55:00+05:30
difficulty: "Hard"
topics: ["Strings", "Sliding Window", "Hashing"]
companies: ["Amazon", "Google", "Atlassian"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MinimumWindowSubstring/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MinimumWindowSubstring/engineering"

hints:
  - "Build a character frequency requirement map from string t and maintain a sliding window [left, right] over string s."
  - "Expand right until all characters of t are satisfied in the window, then contract left to shrink the window while maintaining the valid match. Track the minimum valid window length."

youtubeId: ""

solutionUrl: "/solutions/minimum-window-substring-solution/"

timeComplexity: "O(m + n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"ADOBECODEBANC\", t = \"ABC\""
    output: "\"BANC\""
    explanation: "The minimum substring containing 'A', 'B', and 'C' is \"BANC\" of length 4."
  - input: "s = \"a\", t = \"a\""
    output: "\"a\""
    explanation: "The entire string is the minimum window."
  - input: "s = \"a\", t = \"aa\""
    output: "\"\""
    explanation: "Both 'a's cannot be matched in s."

constraints:
  - "1 <= s.length(), t.length() <= 10^5"
  - "s and t consist of uppercase and lowercase English letters"

realWorld:
  - title: "Log Correlation Event Windowing"
    description: "Finding the narrowest timestamp interval in high-throughput server log streams containing a full set of correlated failure signatures."
  - title: "Chromosomal Multi-Primer Binding Locus"
    description: "Locating the shortest contiguous genomic sequence segment containing all specified PCR primer motifs."
  - title: "Search Engine Result Snippet Generation"
    description: "Extracting the most concise context snippet on a webpage containing all user query keywords."
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `s` and `t` of lengths $m$ and $n$ respectively, return the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window.

If there is no such substring, return the empty string `""`.
