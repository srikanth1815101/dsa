---
title: "Valid Anagram"
date: 2026-09-26T19:51:00+05:30
difficulty: "Easy"
topics: ["Strings", "Hashing", "Sorting"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ValidAnagram/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ValidAnagram/engineering"

hints:
  - "If the two strings have different lengths, they cannot be anagrams of each other."
  - "Use a fixed-size frequency array of 26 integers. Increment frequencies for characters in s and decrement for characters in t. If all counts evaluate to zero, the strings are anagrams."

youtubeId: ""

solutionUrl: "/solutions/valid-anagram-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"anagram\", t = \"nagaram\""
    output: "true"
    explanation: "Both strings have identical character frequencies: 3 'a's, 1 'g', 1 'm', 1 'n', 1 'r'."
  - input: "s = \"rat\", t = \"car\""
    output: "false"
    explanation: "The characters do not match."

constraints:
  - "1 <= s.length(), t.length() <= 5 * 10^4"
  - "s and t consist of lowercase English letters"

realWorld:
  - title: "Word Game Tile Verification"
    description: "Validating played word candidates against player tile racks in Scrabble and anagram board engines."
  - title: "Historical Pseudonym Stylometry"
    description: "Uncovering anagrammatic author pseudonyms across historical literature archives."
  - title: "Search Engine Permutation Keyword Matching"
    description: "Resolving transposed query tokens in e-commerce search bars to suggest valid product matches."
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
