---
title: "Alien Dictionary"
date: 2024-01-28T00:00:00Z
difficulty: "Hard"
topics: ["Graph", "Topological Sort", "BFS"]
companies: ["Amazon", "Facebook", "Airbnb"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/alien-dictionary"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/alien-dictionary"
hints:
  - "Build a directed graph from character orderings."
  - "Use topological sort to determine the order."
youtubeId: "6kTZYvNNyps"
solutionUrl: "/solutions/alien-dictionary-solution/"
timeComplexity: "O(C)"
spaceComplexity: "O(1)"
examples:
  - input: "words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]"
    output: "\"wertf\""
    explanation: "From the word orderings, we derive: w→e, r→t, t→f, e→r."
  - input: "words = [\"z\",\"x\",\"z\"]"
    output: "\"\""
    explanation: "z comes before x which comes before z—this is a cycle, so no valid order exists."
constraints:
  - "1 <= words.length <= 100"
  - "1 <= words[i].length <= 100"
  - "words[i] consists of only lowercase English letters"
realWorld:
  - title: "Language Analysis"
    description: "Determining character ordering from sorted text samples."
  - title: "Font Rendering"
    description: "Computing glyph ordering for custom character sets."
  - title: "Cryptography"
    description: "Deducing cipher alphabets from sorted encrypted text."
---

There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings `words` from the alien language's dictionary. Now it is claimed that the strings in `words` are sorted lexicographically by the rules of this new language.

If this claim is incorrect, and the given arrangement of string in `words` cannot correspond to any order of letters, return **""**.

Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules.
