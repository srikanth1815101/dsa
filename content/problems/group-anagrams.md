---
title: "Group Anagrams"
date: 2026-09-26T19:56:00+05:30
difficulty: "Medium"
topics: ["Strings", "Hashing", "Sorting"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/GroupAnagrams/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/GroupAnagrams/engineering"

hints:
  - "Two strings are anagrams if and only if their sorted character representations are identical."
  - "Sort the characters of each string to use as a canonical key in a hash map. Group original strings into buckets corresponding to identical sorted keys."

youtubeId: ""

solutionUrl: "/solutions/group-anagrams-solution/"

timeComplexity: "O(N * K log K)"
spaceComplexity: "O(N * K)"

examples:
  - input: "strs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]"
    output: "[[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]"
    explanation: "Strings with identical sorted signatures ('abt', 'ant', 'aet') are grouped together."
  - input: "strs = [\"\"]"
    output: "[[\"\"]]"
    explanation: "An empty string forms its own group."

constraints:
  - "1 <= strs.length <= 10^4"
  - "0 <= strs[i].length <= 100"
  - "strs[i] consists of lowercase English letters"

realWorld:
  - title: "Search Engine Intent Clustering"
    description: "Grouping anagrammatic search keywords to route permutation queries to the same pre-computed search cache."
  - title: "Scrabble Word Finder Dictionary Indexing"
    description: "Pre-sorting lexicons by alphabetical letter signatures to execute constant-time anagram lookups."
  - title: "Source Code Token Obfuscation Detection"
    description: "Detecting identifier transposition patterns in code similarity and plagiarism detection pipelines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in any order.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
