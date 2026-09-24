---
title: "Rotate a Number"
date: 2026-04-11T15:23:08+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["Goldman Sachs", "Morgan Stanley", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateANumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateANumber/engineering"

hints:
  - "Find the total number of digits first."
  - "Bring k within the range of total digits using k % digits. Handle negative k by converting it to an equivalent positive rotation."

youtubeId: ""

solutionUrl: "/solutions/rotate-a-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 12345, k = 2"
    output: "45123"
    explanation: "Rotating 12345 to the right by 2 shifts 45 to the front, resulting in 45123."
  - input: "n = 12345, k = -2"
    output: "34512"
    explanation: "Rotating 12345 by -2 is equivalent to rotating left by 2 or right by 3, resulting in 34512."

constraints:
  - "1 <= n <= 10^9"
  - "-10^9 <= k <= 10^9"
  - "Rotation should maintain the relative order of digits."

realWorld:
  - title: "Encryption Ciphers"
    description: "Implementing circular shift ciphers where bits or digits are rotated to obfuscate data during transmission."
  - title: "Load Balancing"
    description: "Cycle through a pool of resource IDs by rotating indices to ensure even distribution of traffic."
  - title: "Text Carousel"
    description: "Shifting characters in a numerical display to create a scrolling or ticker effect in embedded systems."
---

<!-- All rights reserved to CSRGO DSA -->

Given a number `n` and an integer `k`, your task is to rotate `n` by `k` digits. A positive `k` implies a right rotation (moving digits from the end to the front), while a negative `k` implies a left rotation. 

For example, rotating `56298` by `2` gives `98562`. Rotating it by `-1` (left by 1) gives `62985`.
