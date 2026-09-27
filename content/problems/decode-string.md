---
title: "Decode String"
date: 2026-09-27T10:18:00+05:30
difficulty: "Medium"
topics: ["Strings", "Stack", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DecodeString/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DecodeString/engineering"

hints:
  - "Maintain two stacks: one for repeating counts (integers) and one for accumulated string prefixes."
  - "When '[' is reached, push the current number and current string onto their respective stacks and reset; when ']' is reached, pop the count and append the repeated string to the previous string."

youtubeId: ""

solutionUrl: "/solutions/decode-string-solution/"

timeComplexity: "O(n * maxK)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"3[a]2[bc]\""
    output: "\"aaabcbc\""
    explanation: "'a' is repeated 3 times, followed by 'bc' repeated 2 times."
  - input: "s = \"3[a2[c]]\""
    output: "\"accaccacc\""
    explanation: "Inner '2[c]' resolves to 'cc'. Outer '3[acc]' expands to 'accaccacc'."

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists of lowercase English letters, digits, and square brackets '[]'."
  - "s is guaranteed to be a valid input without extra spaces, and all integers in s are in the range [1, 300]."

realWorld:
  - title: "Data Decompression and RLE Encodings"
    description: "Lossless compression utilities decompress repetitive nested run-length encoded payload blocks."
  - title: "Molecular Biology DNA Sequence Expansion"
    description: "Bioinformatics gene sequence processors expand condensed tandem repeat notation in genomic databases."
  - title: "Vector Graphics SVG Path Macros"
    description: "Rendering engines unpack repeating coordinate shape patterns defined in shorthand vector representations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an encoded string `s`, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is repeated exactly `k` times. You may assume that the input string is always valid without stray brackets or malformed numbers. Furthermore, digits are only for repeating numbers `k` and not within the content itself.

Return the fully expanded decoded string.
