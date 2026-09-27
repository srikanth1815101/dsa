---
title: "Alien Dictionary"
date: 2026-09-27T20:57:00+05:30
draft: false
difficulty: "Hard"
companies: ["Amazon", "Microsoft", "Google"]
topics: ["Graph", "Topological Sort", "Strings"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AlienDictionary/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AlienDictionary/engineering"
hints:
  - "Extract character precedence relationships by comparing each pair of consecutive words at their first differing character."
  - "Be cautious of invalid prefix conditions: if word A is longer than word B but starts with word B, no valid order can exist."
  - "Model the precedence rules as a directed graph where edges represent 'comes before'. Perform topological sort using Kahn's algorithm or DFS."
  - "If the graph contains a cycle or the topological sort cannot include all unique characters, return empty string."
youtubeId: ""
solutionUrl: "/solutions/alien-dictionary-solution/"
timeComplexity: "O(C)"
spaceComplexity: "O(1) or O(U + min(U^2, N))"
examples:
  - input: |
      words = ["wrt", "wrf", "er", "ett", "rftt"]
    output: |
      "wertf"
    explanation: "By comparing adjacent words: 'wrt' and 'wrf' gives 't' -> 'f'; 'wrf' and 'er' gives 'w' -> 'e'; 'er' and 'ett' gives 'r' -> 't'; 'ett' and 'rftt' gives 'e' -> 'r'. A valid topological order is 'wertf'."
  - input: |
      words = ["z", "x"]
    output: |
      "zx"
    explanation: "From 'z' and 'x', 'z' comes before 'x'."
  - input: |
      words = ["z", "x", "z"]
    output: |
      ""
    explanation: "From 'z' and 'x', 'z' comes before 'x'. From 'x' and 'z', 'x' comes before 'z'. This forms a cycle, so no valid ordering exists."
constraints:
  - "1 <= words.length <= 100"
  - "1 <= words[i].length <= 100"
  - "words[i] consists of only lowercase English letters."
realWorld:
  - title: "Ancient Script Collation Order Deduction"
    description: "Linguistics analysis engines infer the alphabetical sort order of extinct or encrypted historical writing systems."
  - title: "User Preference Ranking Order Synthesis"
    description: "Recommendation systems construct global item priority rankings from pairwise user comparison sequences."
  - title: "Custom Database Character Set Collation"
    description: "Database engines determine byte comparison orders for custom localization and language sorting collations."
---

<!-- All rights reserved to CSRGO DSA -->

There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings `words` from the alien language's dictionary, where the strings are claimed to be **sorted lexicographically** by the rules of this new language.

Derive the order of letters in this language:
- Return a string of the unique letters in the new alien language sorted in lexicographical increasing order by the new language's rules.
- If there are multiple valid orders, return the lexicographically smallest order.
- If no valid order exists (such as when there is a cycle or an invalid prefix), return `""`.
