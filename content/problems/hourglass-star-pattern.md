---
title: "Hourglass Star Pattern"
date: 2026-09-24T23:45:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HourglassStarPattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/HourglassStarPattern/engineering"

hints:
  - "The top half is hollow beneath a solid top lid: row 1 has n stars, while rows 2 to mid - 1 have stars at col i and col n - i + 1."
  - "The waist at row mid has a single star, and the bottom half (rows mid + 1 to n) forms a solid filled pyramid."

youtubeId: ""

solutionUrl: "/solutions/hourglass-star-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 7"
    output: "*\t*\t*\t*\t*\t*\t*\n\t*\t\t\t\t*\n\t\t*\t\t*\n\t\t\t*\n\t\t*\t*\t*\n\t*\t*\t*\t*\t*\n*\t*\t*\t*\t*\t*\t*\n"
    explanation: "For n = 7, row 1 is a solid line of 7 stars. Rows 2 and 3 are hollow diagonals, row 4 is the central waist, and rows 5-7 form a filled pyramid base."
  - input: "n = 5"
    output: "*\t*\t*\t*\t*\n\t*\t\t*\n\t\t*\n\t*\t*\t*\n*\t*\t*\t*\t*\n"
    explanation: "For n = 5, row 1 has 5 stars, row 2 has stars at columns 2 and 4, row 3 has 1 star, row 4 has 3 stars, and row 5 has 5 stars."

constraints:
  - "1 <= n <= 99"
  - "n is an odd integer"
  - "Stars in each row must be separated by a tab character (`\\t`)."
  - "Each row must conclude with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Terminal Loading Spinners"
    description: "ASCII status animations and terminal process indicators render progressive hourglass glyph frames during long-running builds."
  - title: "Optical Funnel Aperture Simulation"
    description: "Simulating light cone convergence through narrow pinhole apertures and bilateral beam collimation in optical simulations."
  - title: "Two-Chamber Fluid Flow Modeling"
    description: "Visualizing particulate draining and two-chamber reservoir emptying dynamics across discrete time-step grid displays."
---
<!-- All rights reserved to CSRGO DSA -->

Given an odd integer `n`, construct an hourglass star pattern across `n` rows.

### Pattern Rules
1. The total number of rows `n` is guaranteed to be an odd positive integer. The middle waist row is `mid = n / 2 + 1`.
2. Row `1` contains a solid line of `n` stars (`*`) separated by tabs (`\t`).
3. For rows `2` through `mid - 1`, the upper bulb is hollow: each row begins with `i - 1` leading tabs (`\t`), followed by a star at column `i`, then `n - 2 * i + 1` tabs, and a second star at column `n - i + 1`.
4. Row `mid` has `mid - 1` leading tabs followed by a single star (`*`).
5. For rows `mid + 1` through `n`, the lower bulb forms a solid pyramid: row `i` begins with `n - i` leading tabs followed by `2 * (i - mid) + 1` stars separated by tabs.
6. Each row terminates immediately with a newline character (`\n`) without trailing tabs.
