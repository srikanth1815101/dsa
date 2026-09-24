---
title: "Inverted Mirrored Triangle"
date: 2026-09-24T22:49:53+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InvertedMirroredTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InvertedMirroredTriangle/engineering"

hints:
  - "Notice that the leading indentation increases row by row, while the number of stars decreases from n down to 1."
  - "For row index i (1 to n), prepend (i - 1) tabs (\t) before printing (n - i + 1) tab-separated stars, followed by a newline (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/inverted-mirrored-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\t*\t*\n\t*\t*\n\t\t*\n"
    explanation: "For n = 3, row 1 has 0 leading tabs and 3 stars, row 2 has 1 leading tab and 2 stars, and row 3 has 2 leading tabs and 1 star. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there are 0 leading tabs and exactly 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Right-Aligned Funnel Visualizers"
    description: "Analytics dashboards render step-down conversion funnels with right-aligned decreasing stage widths using indented row generation."
  - title: "Depletion Cascade Graphs"
    description: "System monitor consoles plot decaying buffer pools or tiered network throughput using right-justified inverted triangle glyphs."
  - title: "Upper-Right Matrix Rasterization"
    description: "Graphics pipelines rasterize upper-triangular matrix regions by shifting the starting horizontal offset rightward on each consecutive row."
---

<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate an inverted mirrored (right-aligned descending) right-angled triangle pattern of asterisks (`*`) of height `n`.

In this pattern:
- The first row contains `0` leading tabs and `n` stars.
- The `i`-th row (where `1 <= i <= n`) begins with `i - 1` tab characters (`\t`) for indentation, followed by `n - i + 1` asterisks (`*`).
- Consecutive stars in the same row are separated by a tab character (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
