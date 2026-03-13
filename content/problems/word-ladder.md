---
title: "Word Ladder"
date: 2024-01-24T00:00:00Z
difficulty: "Hard"
topics: ["Graph", "BFS", "String"]
companies: ["Amazon", "Facebook", "Google"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/word-ladder"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/word-ladder"
hints:
  - "Model words as nodes in a graph where edges connect words differing by one letter."
  - "Use BFS to find the shortest path."
youtubeId: "h9iTnkgv05E"
solutionUrl: "/solutions/word-ladder-solution/"
timeComplexity: "O(M² × N)"
spaceComplexity: "O(M × N)"
examples:
  - input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]"
    output: "5"
    explanation: "hit → hot → dot → dog → cog (5 words in the sequence)."
  - input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]"
    output: "0"
    explanation: "endWord 'cog' is not in wordList, so no transformation is possible."
constraints:
  - "1 <= beginWord.length <= 10"
  - "endWord.length == beginWord.length"
  - "1 <= wordList.length <= 5000"
  - "All words consist of lowercase English letters"
  - "beginWord != endWord"
realWorld:
  - title: "Spell Checker"
    description: "Finding the shortest correction path between misspelled and correct words."
  - title: "DNA Sequencing"
    description: "Computing minimum mutations between genetic sequences."
  - title: "Language Translation"
    description: "Finding transformation paths between word forms."
---

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord → s1 → s2 → ... → sk` such that:
- Every adjacent pair of words differs by a **single letter**
- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`
- `sk == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **number of words** in the **shortest transformation sequence** from `beginWord` to `endWord`, or `0` if no such sequence exists.
