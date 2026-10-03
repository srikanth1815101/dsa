---
title: "Word Ladder"
date: 2026-10-01T01:40:00+05:30
difficulty: "Hard"
topics: ["Graph", "BFS", "Hashing"]
companies: ["Amazon", "Samsung", "Meta"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordLadder/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordLadder/engineering"

hints:
  - "Model words as nodes and one-letter transformations as edges, turning the problem into finding the shortest path in an unweighted graph."
  - "Run Breadth-First Search (BFS) starting from beginWord, exploring all 26 single-character substitutions at each level."

youtubeId: ""

solutionUrl: "/solutions/word-ladder-solution/"

timeComplexity: "O(M^2 * N)"
spaceComplexity: "O(M * N)"

examples:
  - input: "beginWord = \"hit\"`, `endWord = \"cog\"`, `wordList = [\"hot\", \"dot\", \"dog\", \"lot\", \"log\", \"cog\"]"
    output: "** `5` **"
    explanation: "** One shortest transformation sequence is `\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\"`, which is 5 words long."
  - input: "beginWord = \"hit\"`, `endWord = \"cog\"`, `wordList = [\"hot\", \"dot\", \"dog\", \"lot\", \"log\"]"
    output: "** `0` **"
    explanation: "** The `endWord` `\"cog\"` is not in `wordList`, therefore there is no valid transformation sequence."

constraints:
  - "1 <= beginWord.length <= 10"
  - "endWord.length == beginWord.length"
  - "1 <= wordList.length <= 5000"
  - "wordList[i].length == beginWord.length"

realWorld:
  - title: "Spellchecker Auto-Correction Sequences"
    description: "Finding the minimal sequence of single-key typographical edits transforming a misspelling into a target word."
  - title: "DNA Genetic Mutation Pathways"
    description: "Mapping the minimum single-nucleotide mutation chain connecting two related genetic strands."
  - title: "Cryptographic Cipher Transformation Chains"
    description: "Analyzing substitution cipher vulnerabilities by determining minimal hamming distance key ladders."
weight: 41
---
<!-- All rights reserved to CSRGO DSA -->

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:
- Every adjacent pair of words differs by exactly one letter.
- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
- `sk == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **number of words** in the **shortest transformation sequence** from `beginWord` to `endWord`, or `0` if no such sequence exists.
