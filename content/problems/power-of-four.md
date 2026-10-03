---
title: "Power of Four"
date: 2026-10-01T02:11:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PowerOfFour/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PowerOfFour/engineering"

hints:
  - "Check if n is a power of two first using (n > 0 && (n & (n - 1)) == 0)."
  - "A power of four has its single set bit at an odd position (0, 2, 4, ...); check with bitmask 0x55555555 or verify (n - 1) % 3 == 0."

youtubeId: ""

solutionUrl: "/solutions/power-of-four-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 16"
    output: "** `true` **"
    explanation: "** `4^2 = 16`."
  - input: "n = 5"
    output: "** `false`"
    explanation: "Result is ** `false`."

constraints:
  - "-2^31 <= n <= 2^31 - 1"
  - "An integer n is a power of four if there exists an integer x such that n == 4^x."
  - "Returns true if n is a power of four, false otherwise."
realWorld:
  - title: "Quadtree Spatial Grid Subdivisions"
    description: "Validating hierarchical bounding box cell counts in quadtree spatial geographic indexes."
  - title: "MPEG Video Macroblock Dimensioning"
    description: "Allocating quad-partitioned macroblock pixel buffers in digital video compression decoders."
  - title: "Texture Mipmap Resolution Sizing"
    description: "Verifying power-of-four dimension constraints for square 2D graphics texture mipmaps."
weight: 72
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, return `true` if it is a power of four. Otherwise, return `false`.

An integer `n` is a power of four if there exists an integer `x` such that `n == 4^x`.
