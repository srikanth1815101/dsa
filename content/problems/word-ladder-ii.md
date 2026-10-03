---
title: "Word Ladder II"
date: 2026-10-01T01:41:00+05:30
difficulty: "Hard"
topics: ["Graph", "BFS", "Backtracking"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordLadderII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordLadderII/engineering"

hints:
  - "Use BFS to calculate the shortest distance from beginWord to all reachable words and build a predecessor parent map."
  - "Use backtracking DFS from endWord back to beginWord using the BFS distance levels to reconstruct all shortest transformation sequences."

youtubeId: ""

solutionUrl: "/solutions/word-ladder-ii-solution/"

timeComplexity: "O(N * M^2 + Paths)"
spaceComplexity: "O(N * M)"

examples:
  - input: "beginWord = \"hit\"`, `endWord = \"cog\"`, `wordList = [\"hot\", \"dot\", \"dog\", \"lot\", \"log\", \"cog\"]"
    output: "** `[[\"hit\", \"hot\", \"dot\", \"dog\", \"cog\"], [\"hit\", \"hot\", \"lot\", \"log\", \"cog\"]]` **"
    explanation: "** There are 2 shortest transformation sequences: - `\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\"` - `\"hit\" -> \"hot\" -> \"lot\" -> \"log\" -> \"cog\"`"
  - input: "beginWord = \"hit\"`, `endWord = \"cog\"`, `wordList = [\"hot\", \"dot\", \"dog\", \"lot\", \"log\"]"
    output: "** `[]` **"
    explanation: "** The `endWord` `\"cog\"` is not in `wordList`, so no sequence can reach it."

constraints:
  - "1 <= beginWord.length <= 5"
  - "endWord.length == beginWord.length"
  - "1 <= wordList.length <= 500"
  - "wordList[i].length == beginWord.length"

realWorld:
  - title: "Multi-Path Routing Redundancy"
    description: "Identifying all equal-length shortest packet routing paths across meshed network topologies for load distribution."
  - title: "Bioinformatics Evolutionary Trees"
    description: "Reconstructing all possible parsimonious evolutionary mutation lineages connecting ancestral and modern DNA."
  - title: "Automated Protocol State Migration"
    description: "Extracting all minimal step-by-step transaction state conversion workflows in enterprise migration software."
weight: 42
---
<!-- All rights reserved to CSRGO DSA -->

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:
- Every adjacent pair of words differs by exactly one letter.
- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
- `sk == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return all the **shortest transformation sequences** from `beginWord` to `endWord`, or an empty list if no such sequence exists. Each sequence should be returned as a list of its words.
