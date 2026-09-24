---
title: "Pinwheel Star Pattern"
date: 2026-09-24T23:47:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PinwheelStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PinwheelStarPattern/engineering"

hints:
  - "The pattern features a central cross along row mid and column mid."
  - "Four rotating arms extend from the cross: top-left (row 1), top-right (col n), bottom-left (col 1), and bottom-right (row n)."

youtubeId: ""

solutionUrl: "/solutions/pinwheel-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5"
    output: "*\t*\t*\t\t*\n\t\t*\t\t*\n*\t*\t*\t*\t*\n*\t\t*\n*\t\t*\t*\t*\n"
    explanation: "For n = 5, the central cross spans row 3 and column 3, with 4 rotational arms on the boundary edges."
  - input: "n = 3"
    output: "*\t*\t*\n*\t*\t*\n*\t*\t*\n"
    explanation: "For n = 3, the arms and cross coincide to fill all cells across 3 rows."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Stars and spaces in each row must be separated by tab characters (`\\t`)."
  - "Each row must conclude with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Turbine Blade Mesh Discretization"
    description: "Generating 4-blade rotational symmetry grids for fluid flow simulation around rotary turbines and impeller hubs."
  - title: "Rotational Symmetry Calibration"
    description: "Aligning quad-core optical sensor arrays and quadrant rotary encoders in robotic motion control systems."
  - title: "Quad-Directional Vector Flow Fields"
    description: "Plotting four-quadrant circulating vortex streams and angular velocity streamlines across digital wind tunnel simulations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, construct a pinwheel star pattern with 4-fold rotational symmetry across `n` rows.

### Pattern Rules
1. The total number of rows `n` is guaranteed to be an odd positive integer. The center coordinate is `mid = n / 2 + 1`.
2. A central cross of stars spans the entire middle row `mid` and middle column `mid`.
3. Four rotational arms of stars extend along the boundaries:
   - **Top-Left**: Row `1` from column `1` to `mid`.
   - **Top-Right**: Column `n` from row `1` to `mid`.
   - **Bottom-Left**: Column `1` from row `mid` to `n`.
   - **Bottom-Right**: Row `n` from column `mid` to `n`.
4. Columns in each row are separated by a tab character (`\t`).
5. Each row terminates immediately after its rightmost star with a newline character (`\n`) without trailing tabs.
