---
title: "Decode Ways"
date: 2026-09-27T20:29:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Strings", "Recursion"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DecodeWays/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DecodeWays/engineering"

hints:
  - "A single digit decode is valid if s[i] is between '1' and '9'. A double digit decode is valid if the two-digit substring is between \"10\" and \"26\"."
  - "Maintain dp[i] representing the number of decodings for prefix of length i, drawing transitions from dp[i - 1] and dp[i - 2]."

youtubeId: ""

solutionUrl: "/solutions/decode-ways-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"12\""
    output: "2"
    explanation: "\"12\" could be decoded as \"AB\" (1 2) or \"L\" (12)."
  - input: "s = \"226\""
    output: "3"
    explanation: "\"226\" could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2 6)."

constraints:
  - "1 <= s.length <= 100"
  - "s consists only of digits and may contain leading zeroes"
  - "The answer fits into a 32-bit signed integer"

realWorld:
  - title: "Telecom Encoded Telemetry Message Parsing"
    description: "Ambiguity resolution for legacy numeric telemetry packets where variable length opcode tokens lack explicit field delimiters."
  - title: "Short Message Service (SMS) Compression Decompression"
    description: "Decoding numeric sequence payloads mapped to alphabet character sets in legacy cell network protocol stacks."
  - title: "Serial Protocol Packet Framing Recovery"
    description: "Identifying valid framing boundary sequences in corrupted or raw bitstream telemetry feeds."
---
<!-- All rights reserved to CSRGO DSA -->

A message containing letters from `A-Z` is encoded to numbers using the mapping:
`'A' -> "1"`, `'B' -> "2"`, ..., `'Z' -> "26"`.

Given a string `s` containing only digits, determine the total number of ways to decode it. Any grouping with leading zeroes like `"06"` is invalid.

Return the number of valid decodings.
