---
title: "Diamond Star Pattern"
date: 2026-09-24T22:52:31+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Cognizant", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiamondStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiamondStarPattern/engineering"

hints:
  - "Notice that the diamond is symmetric and divided into two halves at the middle row (n / 2 + 1). Above the middle, stars increase by 2 while leading tabs decrease by 1."
  - "Below the middle row, reverse the behavior: increment leading tabs by 1 and decrement stars by 2. Ensure stars are tab-separated (\t) and rows end with (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/diamond-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "\t*\n*\t*\t*\n\t*\n"
    explanation: "For n = 3, row 1 has 1 leading tab and 1 star, row 2 has 0 leading tabs and 3 stars, and row 3 has 1 leading tab and 1 star. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single row with 0 leading tabs and 1 star terminated by a newline."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Terminal Glyph Indicators"
    description: "CLI developer tools and status indicators render diamond status badges and node expansion glyphs using symmetrical matrix generators."
  - title: "Geospatial Map Markers"
    description: "Lightweight ASCII terminal map plotters render rhomboid zone anchors and central waypoint targets using diamond star coordinates."
  - title: "Diamond Primitive Rasterization"
    description: "2D gaming display engines generate isometric tile bounds and diamond-shaped bounding boxes by tracking bilateral expanding and contracting spans."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, generate a solid symmetrical diamond pattern of asterisks (`*`) having `n` rows.

In this pattern:
- The pattern consists of `n` rows where `n` is guaranteed to be an odd positive integer.
- The middle row (row `(n / 2) + 1`) contains `n` stars and `0` leading tabs.
- Prior to the middle row, each row decreases leading tabs by `1` and increases the star count by `2`.
- After the middle row, each row increases leading tabs by `1` and decreases the star count by `2`.
- Consecutive stars in the same row are separated by a tab character (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
