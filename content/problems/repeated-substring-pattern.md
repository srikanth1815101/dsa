---
title: "Repeated Substring Pattern"
date: 2026-10-01T01:12:00+05:30
difficulty: "Easy"
topics: ["Strings", "KMP Algorithm"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RepeatedSubstringPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RepeatedSubstringPattern/engineering"

hints:
  - "Construct the Longest Prefix Suffix (LPS) array using the KMP string matching preprocessing phase."
  - "If the length of the string n is divisible by (n - lps[n - 1]), the periodic unit repeats cleanly."

youtubeId: ""

solutionUrl: "/solutions/repeated-substring-pattern-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"abab\""
    output: "true"
    explanation: "It is the substring \"ab\" twice."
  - input: "s = \"aba\""
    output: "false"
    explanation: "\"aba\" cannot be formed by repeating any smaller substring."

constraints:
  - "1 <= s.length <= 10^4"
  - "s consists of lowercase English letters."
  - "The repeated substring must have a length of at least 1 and at most s.length / 2."

realWorld:
  - title: "DNA Tandem Repeat Identification"
    description: "Detecting microsatellite recurring nucleotide patterns in genetic sequencing workflows."
  - title: "Network Transmission Periodic Framing"
    description: "Identifying repeated synchronization headers across continuous bitstream telemetry channels."
  - title: "Lossless Compression Pre-filtering"
    description: "Identifying periodic repetitive payloads prior to dictionary-based compression encoding."
weight: 13
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
