---
title: "Symmetric Number Valley"
date: 2026-09-24T23:36:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "HCL"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SymmetricNumberValley/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SymmetricNumberValley/engineering"

hints:
  - "Each row i (from 1 to n) has an increasing left sequence (1 to i) and a decreasing right sequence."
  - "The valley gap between sequences consists of 2 * (n - i) tabs for rows before the final row, while the final row joins at the center peak n."

youtubeId: ""

solutionUrl: "/solutions/symmetric-number-valley-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 4"
    output: "1\t\t\t\t\t\t1\n1\t2\t\t\t\t2\t1\n1\t2\t3\t\t3\t2\t1\n1\t2\t3\t4\t3\t2\t1\n"
    explanation: "For n = 4, numbers ascend to i and descend from i on the flanks, separated by a narrowing valley of tabs until meeting at apex 4 in the final row."
  - input: "n = 2"
    output: "1\t\t1\n1\t2\t1\n"
    explanation: "For n = 2, row 1 has 1 on both sides separated by 2 tabs, and row 2 meets at center value 2."

constraints:
  - "1 <= n <= 50"
  - "Numbers and empty columns in each row must be separated by tab characters (`\\t`)."
  - "Each row must conclude with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Bilateral Bridge Truss Profiling"
    description: "Modeling symmetric cantilever load distributions and arch truss tension lines across suspension span benchmarks."
  - title: "Radar Reflection Valley Analysis"
    description: "Visualizing radar signal return intensity dips and dual-peak interference boundaries across spatial sweeps."
  - title: "Bilateral Stereo Channel Panning"
    description: "Synthesizing cross-fading channel gain matrices where left and right stereo amplitudes mirror symmetrically toward a central blend."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, construct a symmetric number valley pattern across `n` rows.

### Pattern Rules
1. In row `i` (from `1` to `n`), the left side contains numbers ascending from `1` up to `i`, separated by tabs (`\t`).
2. For rows `i < n`, a valley gap of `2 * (n - i)` tab characters separates the left and right sequences. The right side then prints numbers descending from `i` down to `1`, separated by tabs.
3. For the final row `i = n`, the apex `n` is printed once in the center, followed immediately by numbers descending from `n - 1` down to `1`, separated by tabs.
4. Each row terminates immediately with a newline character (`\n`) without any trailing tab characters.
