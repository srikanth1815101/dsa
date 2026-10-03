---
title: "Hollow Diamond Pattern"
date: 2026-09-24T22:54:56+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "HCL"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HollowDiamondPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HollowDiamondPattern/engineering"

hints:
  - "Notice that each row is composed of three sections: left outer stars, a central gap of tabbed spaces forming a hollow diamond, and right outer stars."
  - "Initialize stars to (n / 2 + 1) and spaces to 1. In the upper half, decrement stars by 1 and increment spaces by 2; reverse this in the lower half. Ensure rows end with (\n) without trailing whitespace."

youtubeId: ""

solutionUrl: "/solutions/hollow-diamond-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\t*\t\t*\t*\n*\t\t\t\t*\n*\t*\t\t*\t*\n"
    explanation: "For n = 3, row 1 has 2 stars, 1 space tab, and 2 stars; row 2 has 1 star, 3 space tabs, and 1 star; row 3 has 2 stars, 1 space tab, and 2 stars."
  - input: "n = 1"
    output: "*\t\t*\n"
    explanation: "For n = 1, row 1 has 1 star, 1 space tab, and 1 star terminated by a newline."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Border Frame & Portal Cutouts"
    description: "Terminal user interfaces render framed viewports and aperture window cutouts using hollow geometric matrix borders."
  - title: "Radar Exclusion Zones"
    description: "Aviation and navigation displays render circular or rhomboid boundary masks to delineate radar keep-out zones on terminal screens."
  - title: "Hole-Punch Polygon Rasterization"
    description: "2D rendering systems rasterize hollow polygons and stencils by drawing paired lateral spans separated by transparent central gaps."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, generate a hollow diamond pattern of asterisks (`*`) having `n` rows.

In this pattern:
- The pattern consists of `n` rows where `n` is guaranteed to be an odd positive integer.
- Each row contains left stars, a central hollow gap of tab spaces, and right stars.
- The initial row starts with `n / 2 + 1` stars on both the left and right, separated by `1` tab space.
- In the upper half (up to row `n / 2`), each row decreases outer stars by `1` and increases the central tab gap by `2`.
- In the lower half, each row increases outer stars by `1` and decreases the central tab gap by `2`.
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the last star of any row.
