---
title: "Longest Word in Dictionary"
date: 2026-10-01T02:34:00+05:30
difficulty: "Medium"
topics: ["Trie", "Strings"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestWordInDictionary/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestWordInDictionary/engineering"

hints:
  - "Sort the words array so shorter words and lexicographically smaller words appear first."
  - "Use a Hash Set or Trie: a word of length L can be built only if its prefix of length L - 1 is already in the set."

youtubeId: ""

solutionUrl: "/solutions/longest-word-in-dictionary-solution/"

timeComplexity: "O(sum of word lengths)"
spaceComplexity: "O(sum of word lengths)"

examples:
  - input: "words = [\"w\",\"wo\",\"wor\",\"worl\",\"world\"]"
    output: "\"world\""
    explanation: "The word 'world' can be built one character at a time by 'w', 'wo', 'wor', and 'worl'."
  - input: "words = [\"a\",\"banana\",\"app\",\"appl\",\"ap\",\"apply\",\"apple\"]"
    output: "\"apple\""
    explanation: "Both 'apple' and 'apply' can be built, but 'apple' is lexicographically smaller."

constraints:
  - "1 <= words.length <= 1000"
  - "1 <= words[i].length <= 30"
  - "words[i] consists of only lowercase English letters."

realWorld:
  - title: "Progressive Vocabulary Builder"
    description: "Determining maximum mastery vocabulary chains in adaptive foreign language learning software."
  - title: "Syntax Grammar Tree Expansion"
    description: "Expanding grammar terminal derivation chains in formal language compiler test generators."
  - title: "Interactive Word Puzzle Solvers"
    description: "Finding longest valid chain sequences in progressive word-ladder puzzle games."
weight: 95
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of strings `words` representing an English Dictionary, return the longest word in `words` that can be built one character at a time by other words in `words`.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string `""`.
