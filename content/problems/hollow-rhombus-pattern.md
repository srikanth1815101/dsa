---
title: "Hollow Rhombus Pattern"
date: 2026-09-24T23:07:17+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "HCL"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HollowRhombusPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HollowRhombusPattern/engineering"

hints:
  - "Notice that each row has stars only on the outline of a diamond: the top and bottom apex rows have exactly 1 star, while all intermediate rows have 2 stars."
  - "Compute the left and right column coordinates for each row. Prepend tabs up to the left star, tab-space to the right star (if distinct), and terminate with (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/hollow-rhombus-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "\t*\n*\t\t*\n\t*\n"
    explanation: "For n = 3, row 1 has 1 star at the apex (column 2), row 2 has stars at columns 1 and 3, and row 3 has 1 star at column 2. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single star terminated by a newline."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Boundary Contour Detection"
    description: "Computer vision and image analysis algorithms trace perimeter contours and bounding rhomboids using edge boundary coordinates."
  - title: "HUD Target Reticles"
    description: "Flight and radar head-up displays draw hollow diamond target lock reticles by plotting perimeter pixels while preserving a clear transparent center."
  - title: "Geofence Perimeter Plotting"
    description: "GIS mapping terminals visualize diamond-shaped spatial geofence boundaries using character-drawn outline rings."
---

<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, generate a hollow rhombus (diamond outline) pattern of asterisks (`*`) spanning `n` rows.

In this pattern:
- The pattern consists of `n` rows where `n` is guaranteed to be an odd positive integer.
- The outline forms a symmetric hollow diamond shape:
  - The first row (top apex) and the last row (bottom apex) contain exactly `1` asterisk at column `(n / 2) + 1`.
  - Every intermediate row contains exactly `2` asterisks situated at symmetric left and right perimeter positions.
- Cells before and between the perimeter asterisks are filled with tab delimiters (`\t`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
