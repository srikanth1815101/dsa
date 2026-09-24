---
title: "Anti-Diagonal Line Pattern"
date: 2026-09-24T23:00:51+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "HCL"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AntiDiagonalLinePattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AntiDiagonalLinePattern/engineering"

hints:
  - "Notice that in each row i (from 1 to n), the star appears at column (n - i + 1), which means there are (n - i) leading tab characters."
  - "For each row, print (n - i) tabs (\t) followed by a single star (*), then append a newline (\n) without any trailing tab or whitespace."

youtubeId: ""

solutionUrl: "/solutions/anti-diagonal-line-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "\t\t*\n\t*\n*\n"
    explanation: "For n = 3, row 1 has 2 leading tabs and 1 star, row 2 has 1 leading tab and 1 star, and row 3 has 0 leading tabs and 1 star. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single row with 0 leading tabs and 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Secondary Diagonal Matrix Scans"
    description: "Numerical mathematics libraries and linear transform processors isolate the counter-diagonal entries of square matrices using complementary coordinate checks."
  - title: "Ascending Ramp Indicators"
    description: "Terminal telemetry monitors render ascending status ramps and counter-diagonal cross-hatch marks to visualize reciprocal load curves."
  - title: "Inverse Ray-Box Intersections"
    description: "Rendering shaders calculate ray-bounding box hits along negative slope paths by tracking reverse-diagonal pixel raster positions."
---

<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate an anti-diagonal line pattern of asterisks (`*`) from the top-right to the bottom-left corner across `n` rows.

In this pattern:
- The pattern spans `n` rows and `n` logical columns.
- The `i`-th row (where `1 <= i <= n`) begins with `n - i` tab characters (`\t`) followed by a single asterisk (`*`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the star on any row.
