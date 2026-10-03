---
title: "Palindrome Partitioning II"
date: 2026-10-01T01:53:00+05:30
difficulty: "Hard"
topics: ["Dynamic Programming", "Strings"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PalindromePartitioningII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PalindromePartitioningII/engineering"

hints:
  - "Precompute a 2D boolean table isPal[i][j] to check if substring s[i..j] is a palindrome in O(1) time."
  - "Define dp[i] as the minimum cuts for s[0..i]. If s[0..i] is a palindrome, dp[i] = 0; otherwise dp[i] = min(dp[j] + 1) for all j where s[j+1..i] is a palindrome."

youtubeId: ""

solutionUrl: "/solutions/palindrome-partitioning-ii-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "s = \"aab\""
    output: "1"
    explanation: "The palindrome partitioning [\"aa\", \"b\"] could be produced using 1 cut."
  - input: "s = \"a\""
    output: "0"
    explanation: "\"a\" is already a palindrome, so 0 cuts are needed."

constraints:
  - "1 <= s.length <= 2000"
  - "s consists of only lowercase English letters."
  - "Every substring in the partition must be a valid palindrome."
realWorld:
  - title: "Bioinformatics RNA Stem-Loop Segmentation"
    description: "Partitioning viral RNA transcripts into the minimum number of palindromic hairpins and secondary structures."
  - title: "Data Deduplication Boundary Detection"
    description: "Identifying symmetric boundary signatures in storage deduplication blocks to optimize delta compression."
  - title: "Natural Language Processing Tokenization"
    description: "Segmenting composite words in agglutinative languages into minimal palindromic morphemes."
weight: 54
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return the **minimum cuts** needed for a palindrome partitioning of `s`.
