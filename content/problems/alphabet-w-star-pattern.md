---
title: "Alphabet W Star Pattern"
date: 2026-09-24T23:54:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AlphabetWStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AlphabetWStarPattern/engineering"

hints:
  - "The outer vertical posts are along columns 1 and n on every row."
  - "The inner inverted V diagonals appear only in the lower half (i >= mid) along j == i and i + j == n + 1."

youtubeId: ""

solutionUrl: "/solutions/alphabet-w-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5"
    output: "*\t\t\t\t*\n*\t\t\t\t*\n*\t\t*\t\t*\n*\t*\t\t*\t*\n*\t\t\t\t*\n"
    explanation: "For n = 5, columns 1 and 5 form vertical posts, with an inverted diagonal V in the lower half starting at center (3, 3)."
  - input: "n = 3"
    output: "*\t\t*\n*\t*\t*\n*\t\t*\n"
    explanation: "For n = 3, row 1 and 3 have stars at columns 1 and 3, and row 2 has stars across columns 1, 2, and 3."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Columns in each row must be separated by tab characters (`\\t`)."
  - "Each row must conclude with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Bitmap Character Font Glyph Rasterization"
    description: "Low-level font rendering and monochrome LCD display controllers generate alphanumeric character glyphs like 'W' using coordinate geometry."
  - title: "Suspension Bridge Cable Geodesics"
    description: "Simulating catenary stay cables and bilateral suspension support pylons across civil infrastructure visualization software."
  - title: "Bilateral Antenna Feedhorn Profiling"
    description: "Modeling dual-dipole antenna feedhorn reflectors and V-shaped radio frequency receivers across electromagnetic array models."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, construct the uppercase alphabet `W` star pattern across an `n x n` grid.

### Pattern Rules
1. The total number of rows `n` is guaranteed to be an odd positive integer. The middle row is `mid = n / 2 + 1`.
2. Vertical pillars of stars (`*`) run along the first column (`j = 1`) and the last column (`j = n`) for every row.
3. In the lower half of the grid (where row index `i >= mid`), an inner inverted V (`/\`) of stars is formed along the main diagonal (`j = i`) and anti-diagonal (`i + j = n + 1`).
4. Elements in each row are separated by a tab character (`\t`).
5. Each row terminates immediately after column `n` with a newline character (`\n`) without trailing tabs.
