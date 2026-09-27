---
title: "Longest Common Subsequence"
date: 2026-09-27T20:38:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Strings"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestCommonSubsequence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestCommonSubsequence/engineering"

hints:
  - "Construct a 2D DP table where dp[i][j] stores the length of the longest common subsequence between text1[0...i-1] and text2[0...j-1]."
  - "If characters match, dp[i][j] = 1 + dp[i-1][j-1]; otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1])."

youtubeId: ""

solutionUrl: "/solutions/longest-common-subsequence-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "text1 = \"abcde\", text2 = \"ace\""
    output: "3"
    explanation: "The longest common subsequence is \"ace\" and its length is 3."
  - input: "text1 = \"abc\", text2 = \"abc\""
    output: "3"
    explanation: "The longest common subsequence is \"abc\" and its length is 3."

constraints:
  - "1 <= text1.length(), text2.length() <= 1000"
  - "text1 and text2 consist only of lowercase English characters."
  - "Subsequences need not be contiguous, but relative character order must be preserved."

realWorld:
  - title: "File Difference Reconciler (Diff Utilities)"
    description: "Computing the longest shared line sequence between two document revisions to display inline additions and deletions."
  - title: "Bioinformatics DNA Homology Alignment"
    description: "Quantifying structural and evolutionary similarity between nucleotide gene sequences."
  - title: "Data Deduplication & Record Linkage"
    description: "Matching fuzzy user entity records across disparate database sources using longest common token subsequences."
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `text1` and `text2`, return the length of their **longest common subsequence**. If there is no common subsequence, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, `"ace"` is a subsequence of `"abcde"`. A **common subsequence** of two strings is a subsequence that is common to both strings.
