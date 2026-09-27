---
title: "Paint House"
date: 2026-09-27T20:31:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PaintHouse/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PaintHouse/engineering"

hints:
  - "Maintain three state variables representing the minimum cost to paint up to the current house ending in Red, Blue, or Green."
  - "If house i is painted Red, house i - 1 must have been painted either Blue or Green: redCost = costs[i][0] + min(prevBlue, prevGreen)."

youtubeId: ""

solutionUrl: "/solutions/paint-house-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]]"
    output: "10"
    explanation: "Paint house 0 blue (cost 2), house 1 green (cost 5), and house 2 blue (cost 3). Total cost = 2 + 5 + 3 = 10."
  - input: "costs = [[7, 6, 2]]"
    output: "2"
    explanation: "Paint the only house green for minimum cost 2."

constraints:
  - "1 <= costs.length <= 1000"
  - "costs[i].length == 3"
  - "1 <= costs[i][j] <= 100"

realWorld:
  - title: "Distributed Job Multi-Datacenter Assignment"
    description: "Minimizing total computing execution costs where sequential batch pipeline stages cannot run in identical physical availability zones."
  - title: "Automated Circuit Trace Layer Routing"
    description: "Routing consecutive signal traces across alternating PCB dielectric layers to prevent electromagnetic cross-talk."
  - title: "Resource Scheduling Shift Allocation"
    description: "Assigning rotating shifts to critical personnel where fatigue regulations prohibit consecutive identical duty assignments."
---
<!-- All rights reserved to CSRGO DSA -->

There is a row of `n` houses, where each house can be painted one of three colors: Red, Blue, or Green. The cost of painting each house with a certain color is different and is represented by an `n x 3` array `costs`.

No two adjacent houses can have the same color.

Find and return the minimum cost to paint all houses.
