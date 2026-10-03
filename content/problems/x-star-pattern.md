---
title: "X Star Pattern"
date: 2026-09-24T23:03:37+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/XStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/XStarPattern/engineering"

hints:
  - "Recall that an X shape is formed by the union of the principal diagonal (where row i == col j) and the secondary anti-diagonal (where i + j == n + 1)."
  - "Iterate through columns up to the rightmost diagonal star in each row: print '*' at diagonal positions and tabs (\t) elsewhere, followed by a newline (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/x-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\t\t*\n\t*\n*\t\t*\n"
    explanation: "For n = 3, row 1 has stars at columns 1 and 3, row 2 has a star at the center column 2, and row 3 has stars at columns 1 and 3. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single star at the intersection terminated by a newline."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Crosshair & Target Reticle Alignment"
    description: "Terminal simulation displays and game HUDs plot target intersection crosshairs by computing bilateral diagonal coordinate overlays."
  - title: "Matrix Sparsity & Diagonal Visualization"
    description: "Scientific debugging tools render non-zero structural cross-points in banded diagonal sparse matrices using ASCII character grids."
  - title: "Intersection Ray Testing"
    description: "Spatial partitioning engines calculate dual-diagonal bounding box intersections to detect collision axes in grid-based environments."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, generate an `X` pattern of asterisks (`*`) spanning `n` rows and `n` columns.

In this pattern:
- The pattern consists of `n` rows where `n` is guaranteed to be an odd positive integer.
- Asterisks (`*`) appear at cells where the row index `i` and column index `j` (both 1-indexed) satisfy either `i == j` (main diagonal) or `i + j == n + 1` (anti-diagonal).
- At the exact center row, the two diagonals intersect at a single asterisk.
- Cells between diagonal asterisks are filled with tab delimiters (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
