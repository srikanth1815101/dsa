---
title: "Arrange Buildings"
date: 2026-09-27T20:28:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ArrangeBuildings/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ArrangeBuildings/engineering"

hints:
  - "Notice that both sides of the road are completely independent. Solve for the number of valid arrangements on a single side first."
  - "On a single side, no two buildings can be adjacent (identical to counting binary strings with no consecutive 'B's). Total ways for both sides is (ways on one side)^2."

youtubeId: ""

solutionUrl: "/solutions/arrange-buildings-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 1"
    output: "4"
    explanation: "For a single plot on each side, each side has 2 options (Building or Space). Total ways = 2 * 2 = 4."
  - input: "n = 2"
    output: "9"
    explanation: "One side has 3 valid combinations: BS, SB, SS. Total ways for both sides = 3 * 3 = 9."

constraints:
  - "1 <= n <= 45"
  - "No two buildings can be adjacent on the same side of the road"
  - "Return the total number of ways as a 64-bit integer (long)"

realWorld:
  - title: "Urban Zoning Setback Regulations"
    description: "Determining permissible municipal street layouts requiring green space buffers between adjacent high-density commercial structures."
  - title: "Multi-Track Rail Siding Placement"
    description: "Calculating valid siding configurations along parallel train tracks where consecutive train stop platforms violate safety clearances."
  - title: "Bilateral Network Routing Tower Layouts"
    description: "Arranging radio cellular transceivers across opposite sides of a highway corridor without co-channel interference."
---
<!-- All rights reserved to CSRGO DSA -->

You are given a number `n` representing the length of a road with `n` plots on both sides (Side A and Side B). Each plot can either have a Building (`B`) or an empty Space (`S`).

No two buildings can be placed adjacent to each other on the **same side** of the road. Buildings on opposite sides do not conflict.

Find and return the total number of ways in which buildings can be arranged on both sides of the road as a `long`.
