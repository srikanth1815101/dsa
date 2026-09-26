---
title: "Longest Substring Without Repeating Characters"
date: 2026-09-26T19:53:00+05:30
difficulty: "Medium"
topics: ["Strings", "Sliding Window", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestSubstringWithoutRepeatingCharacters/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestSubstringWithoutRepeatingCharacters/engineering"

hints:
  - "Maintain a sliding window [left, right] with an auxiliary array or hash map tracking the last seen index of each character."
  - "When s.charAt(right) was previously seen at an index >= left, shift left to lastIndex + 1 to eliminate the duplicate in O(1) time."

youtubeId: ""

solutionUrl: "/solutions/longest-substring-without-repeating-characters-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"abcabcbb\""
    output: "3"
    explanation: "The longest non-repeating substring is \"abc\", with a length of 3."
  - input: "s = \"pwwkew\""
    output: "3"
    explanation: "The longest non-repeating substring is \"wke\", with a length of 3."

constraints:
  - "0 <= s.length() <= 5 * 10^4"
  - "s consists of English letters, digits, symbols and spaces"

realWorld:
  - title: "Network Frame De-duplication Windows"
    description: "Tracking the maximum window of unique continuous transaction packet identifiers across a lossy network."
  - title: "Compiler Symbol Table Lexical Chains"
    description: "Identifying maximal contiguous spans of non-conflicting identifier tokens during preliminary parsing."
  - title: "Bioinformatic Unique Oligomer Spans"
    description: "Determining longest uninterrupted nucleotide sequences devoid of tandem repeating elements in genetic sequencing."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, find and return the length of the **longest substring without repeating characters**.
