---
title: "Inverted Right Triangle"
date: 2026-09-24T22:42:37+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InvertedRightTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InvertedRightTriangle/engineering"

hints:
  - "Notice that the number of stars decreases with each subsequent row, starting from n stars in the first row down to 1 star in the last row."
  - "For row index i (from 1 to n), the number of stars to print is (n - i + 1). Ensure stars are tab-separated (\t) and each row ends with a newline (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/inverted-right-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\t*\t*\n*\t*\n*\n"
    explanation: "For n = 3, row 1 contains 3 tab-separated stars, row 2 contains 2 tab-separated stars, and row 3 contains 1 star. Each row terminates with a newline character."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single row with exactly 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Inverted Progress Indicators"
    description: "Terminal countdown meters and depleting quota bars render shrinking level indicators using inverted matrix row printing."
  - title: "Memory Allocation Visualizers"
    description: "Diagnostic utilities display declining stack depth or memory pool deallocations using inverse triangular charts."
  - title: "Rasterization Boundary Trimming"
    description: "Graphic clipping engines use inverted triangle raster algorithms to discard off-screen polygon zones row by row."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate an inverted right-angled triangle pattern of asterisks (`*`) of height `n`.

In this pattern:
- The first row contains `n` stars, the second row contains `n - 1` stars, and the `i`-th row contains `n - i + 1` stars down to `1` star in the `n`-th row.
- In each row, consecutive stars are separated by a single tab character (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
