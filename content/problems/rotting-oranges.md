---
title: "Rotting Oranges"
date: 2026-10-01T02:40:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Multi-source BFS"]
companies: ["Amazon", "Flipkart", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RottingOranges/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RottingOranges/engineering"

hints:
  - "Use a multi-source Breadth-First Search (BFS) starting from all initially rotten oranges simultaneously."
  - "Track the count of fresh oranges; if the count reaches zero, return the elapsed minutes; otherwise return -1."

youtubeId: ""

solutionUrl: "/solutions/rotting-oranges-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "grid = [[2,1,1],[1,1,0],[0,1,1]]"
    output: "4"
    explanation: "Minute 0: rotten at (0,0). Fresh oranges progressively rot along adjacent cells until all are rotten after 4 minutes."
  - input: "grid = [[2,1,1],[0,1,1],[1,0,1]]"
    output: "-1"
    explanation: "The orange in the bottom-left corner at (2,0) is isolated by walls of empty cells and can never rot."

constraints:
  - "1 <= grid.length, grid[i].length <= 10"
  - "grid[i][j] is 0, 1, or 2."
  - "0 represents an empty cell, 1 represents a fresh orange, and 2 represents a rotten orange."

realWorld:
  - title: "Epidemic Contact Tracing Simulation"
    description: "Modeling viral contagion spread through dense localized spatial clusters to predict contagion containment times."
  - title: "Warehouse Perishable Inventory Monitoring"
    description: "Simulating fungal decay transmission across fruit crates in cold storage supply chain logistics."
  - title: "Wildfire Spatial Propagation"
    description: "Forecasting multi-front forest fire spread across adjacent dry vegetation plots under zero wind conditions."
weight: 101
---
<!-- All rights reserved to CSRGO DSA -->

You are given an `m x n` `grid` where each cell can have one of three values:
- `0` representing an empty cell,
- `1` representing a fresh orange, or
- `2` representing a rotten orange.

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return *the minimum number of minutes that must elapse until no cell has a fresh orange*. If this is impossible, return `-1`.
