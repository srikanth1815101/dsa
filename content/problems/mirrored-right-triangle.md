---
title: "Mirrored Right Triangle"
date: 2026-09-24T22:46:20+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MirroredRightTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MirroredRightTriangle/engineering"

hints:
  - "Observe that each row i has two parts: leading tab-spaced indentation and stars. For row i (1 to n), determine how many leading tabs are required."
  - "Row i requires (n - i) leading tabs (\t) followed by i stars. Stars are separated by tabs, and every row ends with a newline (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/mirrored-right-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "\t\t*\n\t*\t*\n*\t*\t*\n"
    explanation: "For n = 3, row 1 has 2 leading tabs and 1 star, row 2 has 1 leading tab and 2 tab-separated stars, and row 3 has 3 tab-separated stars. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there are 0 leading tabs and exactly 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Right-Aligned Terminal Reports"
    description: "Financial dashboards and ledger reporting tools right-align numerical charts and tiered thresholds using structured tab spacing."
  - title: "Right-Hand Graphical Meshes"
    description: "Low-level graphics rasterizers plot mirrored wedge primitives by calculating horizontal start offsets before drawing pixel spans."
  - title: "Text Layout Justification"
    description: "Terminal pagers and text formatting engines compute prefix padding to justify hierarchical right-aligned callout cards."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate a mirrored (right-aligned) right-angled triangle pattern of asterisks (`*`) of height `n`.

In this pattern:
- The triangle is right-aligned across `n` rows.
- The `i`-th row (where `1 <= i <= n`) begins with `n - i` tab characters (`\t`) for indentation, followed by `i` asterisks (`*`).
- Consecutive stars in the same row are separated by a tab character (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
