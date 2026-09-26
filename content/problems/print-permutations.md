---
title: "Print Permutations"
date: 2026-09-26T20:55:00+05:30
difficulty: "Medium"
topics: ["Strings", "Backtracking", "Recursion"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintPermutations/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintPermutations/engineering"

hints:
  - "Iterate through each character at index i, extract it as the choice for current slot, and recursively permute the remaining substring."
  - "The base case is reached when input string becomes empty, appending the accumulated answer string."

youtubeId: ""

solutionUrl: "/solutions/print-permutations-solution/"

timeComplexity: "O(n!)"
spaceComplexity: "O(n)"

examples:
  - input: "str = \"abc\""
    output: "[\"abc\", \"acb\", \"bac\", \"bca\", \"cab\", \"cba\"]"
    explanation: "All 3! = 6 unique character permutations generated in lexicographical choice order."
  - input: "str = \"a\""
    output: "[\"a\"]"
    explanation: "Single character yields 1 permutation."

constraints:
  - "0 <= str.length() <= 8"
  - "str consists of distinct lowercase English letters."

realWorld:
  - title: "Anagram Solvers and Word Game Word Search"
    description: "Generating all candidate letter rearrangements to test against dictionary tries."
  - title: "Brute-force Permutative Cryptanalysis"
    description: "Evaluating character transposition cipher permutations against frequency models."
  - title: "Traveling Salesperson Brute-force Route Search"
    description: "Enumerating every possible city visitation order to identify the globally minimal tour."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `str` of distinct characters, find and return all permutations of the characters of `str`.
