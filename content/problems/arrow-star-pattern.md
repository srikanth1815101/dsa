---
title: "Arrow Star Pattern"
date: 2026-09-24T23:39:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ArrowStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ArrowStarPattern/engineering"

hints:
  - "The middle row (mid = n / 2 + 1) represents the arrow shaft and point spanning all n columns with no leading tabs."
  - "Every other row i has (mid - 1) leading tabs followed by k stars, where k = (i < mid) ? i : (n - i + 1)."

youtubeId: ""

solutionUrl: "/solutions/arrow-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5"
    output: "\t\t*\n\t\t*\t*\n*\t*\t*\t*\t*\n\t\t*\t*\n\t\t*\n"
    explanation: "For n = 5, the middle row 3 contains 5 stars. Rows 1, 2, 4, and 5 have 2 leading tabs with 1, 2, 2, and 1 stars respectively."
  - input: "n = 3"
    output: "\t*\n*\t*\t*\n\t*\n"
    explanation: "For n = 3, row 1 has 1 leading tab and 1 star, row 2 has 3 stars, and row 3 mirrors row 1."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Stars in each row must be separated by a tab character (`\\t`)."
  - "Each row must conclude with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Directional CLI Navigation Indicators"
    description: "Terminal user interfaces and interactive command prompts render directional arrows for tree navigation and menu selection."
  - title: "Flowchart Vector Rendering"
    description: "Plotting rasterized directional connectors and pipeline flow arrows in terminal-based diagram generation tools."
  - title: "Wind Vector and Velocity Plotting"
    description: "Meteorological terminal stations render wind direction barbs and directional vectors across geographic coordinate grids."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, construct a right-pointing arrow star pattern across `n` rows.

### Pattern Rules
1. The total number of rows `n` is guaranteed to be an odd positive integer. The middle row is `mid = n / 2 + 1`.
2. The middle row `mid` contains `n` stars (`*`) separated by tabs (`\t`) with zero leading tabs.
3. For all other rows `i` ($i \ne mid$), each row begins with `mid - 1` leading tabs (`\t`), followed by `k` stars separated by tabs, where `k = (i < mid) ? i : (n - i + 1)`.
4. Each row terminates immediately with a newline character (`\n`) without trailing tabs.
