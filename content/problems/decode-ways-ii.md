---
title: "Decode Ways II"
date: 2026-10-01T01:14:00+05:30
difficulty: "Hard"
topics: ["Strings", "Dynamic Programming", "Recursion"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DecodeWaysII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DecodeWaysII/engineering"

hints:
  - "Handle single-character and two-character decodings separately, paying attention to when '*' appears."
  - "A single '*' can be decoded into 9 possible characters (1-9), while paired with '1', '2', or another '*' it unlocks varying branch counts."

youtubeId: ""

solutionUrl: "/solutions/decode-ways-ii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"*\""
    output: "9"
    explanation: "The encoded message can represent any of the encoded messages \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", or \"9\" corresponding to 'A' through 'I'."
  - input: "s = \"1*\""
    output: "18"
    explanation: "The encoded message can represent \"11\" through \"19\" (each decoding as a single letter), or '1' followed by ('1' through '9'), yielding 9 + 9 = 18 ways."

constraints:
  - "1 <= s.length <= 10^5"
  - "s[i] is a digit or '*'."
  - "The answer may be very large, return it modulo 10^9 + 7."

realWorld:
  - title: "Telecom Wildcard Frame Demultiplexing"
    description: "Determining combinatorial decoding pathways for noisy serial protocol packets containing dropped or wildcard nibbles."
  - title: "Cryptographic Ambiguous Sequence Recovery"
    description: "Estimating potential plaintext branch spaces for partially degraded keystreams in cryptanalysis workflows."
  - title: "Compiler Grammatical Parser Recovery"
    description: "Branch prediction across wildcard operator terminals in extensible domain-specific language parsers."
weight: 15
---
<!-- All rights reserved to CSRGO DSA -->

A message containing letters from `A-Z` can be encoded into numbers using the following mapping:
- `'A' -> "1"`
- `'B' -> "2"`
- ...
- `'Z' -> "26"`

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, `"11106"` can be mapped into:
- `"AAJF"` with the grouping `(1 1 10 6)`
- `"KJF"` with the grouping `(11 10 6)`

Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'` since `"6"` is different from `"06"`.

In addition to the digits `'0'` through `'9'`, the encoded message may contain the `'*'` character, which can represent any digit from `'1'` to `'9'` (`'0'` is excluded).

Given a string `s` consisting of digits and `'*'` characters, return the number of ways to decode it modulo `10^9 + 7`.
