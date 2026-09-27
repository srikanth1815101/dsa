---
title: "Edit Distance"
date: 2026-09-27T20:37:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Strings"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/EditDistance/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/EditDistance/engineering"

hints:
  - "Let dp[i][j] represent the minimum edit distance between word1[0...i - 1] and word2[0...j - 1]."
  - "If characters match, dp[i][j] = dp[i - 1][j - 1]; otherwise take 1 + min of insertion, deletion, and substitution costs."

youtubeId: ""

solutionUrl: "/solutions/edit-distance-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "word1 = \"horse\", word2 = \"ros\""
    output: "3"
    explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')."
  - input: "word1 = \"intention\", word2 = \"execution\""
    output: "5"
    explanation: "intention -> inention -> enention -> exention -> exection -> execution."

constraints:
  - "0 <= word1.length, word2.length <= 500"
  - "word1 and word2 consist of lowercase English letters."
  - "Allowed operations are insert, delete, and replace."

realWorld:
  - title: "Spell Checking & Autocorrection"
    description: "Determining minimum phonetic edit distance to suggest corrected candidate tokens from a dictionary."
  - title: "Computational Biology DNA Alignment"
    description: "Measuring mutational divergence between nucleotide gene sequences."
  - title: "Version Control Diff Generation"
    description: "Computing optimal insert and delete transformations when reconciling divergent document branches."
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You are permitted to use the following three operations on a word:
1. **Insert** a character
2. **Delete** a character
3. **Replace** a character
