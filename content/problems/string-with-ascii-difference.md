---
title: "String with ASCII Difference"
date: 2026-09-26T19:48:00+05:30
difficulty: "Easy"
topics: ["Strings", "Mathematics"]
companies: ["TCS", "Wipro", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringWithASCIIDifference/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringWithASCIIDifference/engineering"

hints:
  - "Start by appending the first character s.charAt(0) to a StringBuilder."
  - "Iterate from index 1 to n - 1. For each index i, compute diff = s.charAt(i) - s.charAt(i - 1), append diff, then append s.charAt(i)."

youtubeId: ""

solutionUrl: "/solutions/string-with-ascii-difference-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"abecd\""
    output: "\"a1b3e-2c1d\""
    explanation: "'b' - 'a' = 1, 'e' - 'b' = 3, 'c' - 'e' = -2, 'd' - 'c' = 1."
  - input: "s = \"pep\""
    output: "\"p-11e11p\""
    explanation: "'e' - 'p' = 101 - 112 = -11; 'p' - 'e' = 112 - 101 = 11."

constraints:
  - "1 <= s.length() <= 10^5"
  - "s consists of uppercase and lowercase English letters"

realWorld:
  - title: "Differential Pulse Code Modulation (DPCM)"
    description: "Encoding difference deltas between successive signal samples to compress transmission streams."
  - title: "Glyph Kerning Vector Encoding"
    description: "Computing relative coordinate and ASCII metric differences between consecutive font glyphs in rendering engines."
  - title: "Network Packet Delta Framing"
    description: "Embedding delta signatures between consecutive byte headers to verify message integrity across lossy channels."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, construct a new string where between every two consecutive characters, their **ASCII difference** (`s.charAt(i) - s.charAt(i - 1)`) is inserted.

For example, for `"abecd"`:
- Between `'a'` and `'b'`: `'b' - 'a' = 1` $\to$ `"a1b"`
- Between `'b'` and `'e'`: `'e' - 'b' = 3` $\to$ `"b3e"`
- Between `'e'` and `'c'`: `'c' - 'e' = -2` $\to$ `"e-2c"`
- Between `'c'` and `'d'`: `'d' - 'c' = 1` $\to$ `"c1d"`
- Result: `"a1b3e-2c1d"`

Return the resulting string.
