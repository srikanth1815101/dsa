---
title: "Implement strstr"
date: 2026-09-26T20:34:00+05:30
difficulty: "Easy"
topics: ["Strings", "Two Pointers"]
companies: ["Meta", "Amazon", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ImplementStrstr/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ImplementStrstr/engineering"

hints:
  - "Scan through the haystack string up to index haystack.length() - needle.length()."
  - "At each index i, compare substring or character by character with needle. Return i on a complete match."

youtubeId: ""

solutionUrl: "/solutions/implement-strstr-solution/"

timeComplexity: "O(n * m)"
spaceComplexity: "O(1)"

examples:
  - input: "haystack = \"hello\", needle = \"ll\""
    output: "2"
    explanation: "\"ll\" first occurs starting at index 2 in \"hello\"."
  - input: "haystack = \"aaaaa\", needle = \"bba\""
    output: "-1"
    explanation: "\"bba\" does not occur in \"aaaaa\"."

constraints:
  - "0 <= haystack.length(), needle.length() <= 5 * 10^4"
  - "haystack and needle consist of only lowercase English characters."

realWorld:
  - title: "Text Search / Grep Utilities"
    description: "Finding keyword occurrences within document streams and text editors."
  - title: "URL Routing and Prefix Filtering"
    description: "Matching route segments or subpaths against incoming HTTP request URIs."
  - title: "DNA Sequence Pattern Matching"
    description: "Locating specific nucleotide target motifs within larger genomic sequences."
---
<!-- All rights reserved to CSRGO DSA -->

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

If `needle` is an empty string `""`, return `0`.
