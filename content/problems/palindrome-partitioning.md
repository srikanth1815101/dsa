---
title: "Palindrome Partitioning"
date: 2026-09-26T21:05:00+05:30
difficulty: "Medium"
topics: ["Strings", "Backtracking", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PalindromePartitioning/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PalindromePartitioning/engineering"

hints:
  - "At each index, consider all possible prefix substrings from start to end index i."
  - "If the prefix substring is a palindrome, recursively partition the remaining suffix starting at i + 1."

youtubeId: ""

solutionUrl: "/solutions/palindrome-partitioning-solution/"

timeComplexity: "O(2^n * n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"aab\""
    output: "[[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]]"
    explanation: "Two valid partitions where every substring is a palindrome."
  - input: "s = \"a\""
    output: "[[\"a\"]]"
    explanation: "Single character is a palindrome."

constraints:
  - "1 <= s.length() <= 16"
  - "s contains only lowercase English letters."

realWorld:
  - title: "Text Segmentation in Natural Language Processing"
    description: "Splitting compound words and continuous scripts into symmetrical phonetic and morphological units."
  - title: "DNA Inverted Repeat Structural Analysis"
    description: "Identifying symmetric palindromic cleavage motifs for restriction enzyme digestion modeling."
  - title: "Data Compression and Suffix Palindrome Tries"
    description: "Decomposing byte streams into mirror-symmetric blocks for specialized run-length encoding."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitionings of `s`.

A **palindrome** string is a string that reads the same backward as forward.
