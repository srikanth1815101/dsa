---
title: "Right Angled Triangle"
date: 2026-09-24T22:24:32+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RightAngledTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RightAngledTriangle/engineering"

hints:
  - "Identify the relationship between the row number i (from 1 to n) and the number of stars printed in that row."
  - "For each row i, print i stars separated by tabs (\t), followed by a newline (\n) without any trailing tab or whitespace."

youtubeId: ""

solutionUrl: "/solutions/right-angled-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\n*\t*\n*\t*\t*\n"
    explanation: "For n = 3, row 1 contains 1 star, row 2 contains 2 tab-separated stars, and row 3 contains 3 tab-separated stars. Each row terminates with a newline character."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single row with exactly 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Terminal Progress Trees"
    description: "Command-line tools like Git and npm render stepped branches and dependency trees using nested loop coordinate generation."
  - title: "Data Visualization in CLI"
    description: "Lightweight monitoring dashboards use character-grid matrix generators to plot linear ramp-up distributions in text terminals."
  - title: "2D Primitive Rasterization"
    description: "Graphics pipelines rasterize triangular 2D geometric meshes by determining horizontal pixel spans row by row."
---

<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate a right-angled triangle pattern of asterisks (`*`) of height `n`.

In this pattern:
- The first row contains `1` star, the second row contains `2` stars, and the `i`-th row contains `i` stars up to `n` rows.
- In each row, consecutive stars are separated by a single tab character (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
