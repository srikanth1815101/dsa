---
title: "Numbered Diamond Pattern"
date: 2026-09-24T23:33:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NumberedDiamondPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NumberedDiamondPattern/engineering"

hints:
  - "Compute the row radius r from the distance to the middle row: r = (i <= mid) ? i : (n - i + 1)."
  - "In each row, print (mid - r) leading tabs, then sequence values from r up to (2 * r - 1) and back down to r."

youtubeId: ""

solutionUrl: "/solutions/numbered-diamond-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5"
    output: "\t\t1\n\t2\t3\t2\n3\t4\t5\t4\t3\n\t2\t3\t2\n\t\t1\n"
    explanation: "For n = 5, the middle row is 3. Rows expand from 1 to 5 numbers with numbers increasing to a central peak then decreasing back to the row index."
  - input: "n = 3"
    output: "\t1\n2\t3\t2\n\t1\n"
    explanation: "For n = 3, row 1 has 1 leading tab with value 1, row 2 has values 2, 3, 2, and row 3 mirrors row 1."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Numbers in each row must be separated by a tab character (`\\t`)."
  - "Each row must end with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Radial Heatmap Distribution"
    description: "Visualizing concentric intensity fields and circular falloff gradients around a central sensor node in diagnostic thermal matrix displays."
  - title: "Iso-Density Elevation Contours"
    description: "Plotting symmetric elevation contour peaks and topographic isolines in ASCII geographical map projection software."
  - title: "Concentric Waveform Synthesis"
    description: "Generating bilateral acoustic dispersion amplitudes and concentric ripple wavefront models for sonar matrix processing."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, construct a diamond pattern consisting of numbers arranged symmetrically across `n` rows.

### Pattern Rules
1. The total number of rows `n` is guaranteed to be an odd positive integer. The middle row is `mid = n / 2 + 1`.
2. For each row `i` (from `1` to `n`), let its distance factor be `r = (i <= mid) ? i : (n - i + 1)`.
3. Each row begins with `(mid - r)` leading tab characters (`\t`).
4. The row contains `2 * r - 1` numbers, starting at `r`, incrementing up to `2 * r - 1`, and then decrementing back down to `r`.
5. Numbers in each row are separated by a tab character (`\t`).
6. Each row ends immediately with a newline character (`\n`) without trailing tabs.
