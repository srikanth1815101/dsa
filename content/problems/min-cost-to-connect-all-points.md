---
title: "Min Cost to Connect All Points"
date: 2026-10-01T02:05:00+05:30
difficulty: "Medium"
topics: ["Graph", "Minimum Spanning Tree", "Heap"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinCostToConnectAllPoints/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinCostToConnectAllPoints/engineering"

hints:
  - "Model points as vertices in a complete graph where edge weights are Manhattan distances."
  - "Use Prim's algorithm with a Min-Heap or Kruskal's algorithm with Disjoint Set Union (DSU) to find the Minimum Spanning Tree (MST)."

youtubeId: ""

solutionUrl: "/solutions/min-cost-to-connect-all-points-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n)"

examples:
  - input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]"
    output: "** `20` **"
    explanation: "** We can connect the points as follows: - Connect `[0,0]` and `[2,2]` with cost 4. - Connect `[2,2]` and `[5,2]` with cost 3. - Connect `[5,2]` and `[7,0]` with cost 4. - Connect `[2,2]` and `[3,10]` with cost 9. Total cost: `4 + 3 + 4 + 9 = 20`."
  - input: "points = [[3,12],[-2,5],[-4,1]]"
    output: "** `18`"
    explanation: "Result is ** `18`."

constraints:
  - "1 <= points.length <= 1000"
  - "-10^6 <= xi, yi <= 10^6"
  - "All pairs `(xi, yi)` are distinct."

realWorld:
  - title: "Electrical Grid Substation Interconnection"
    description: "Connecting regional electrical distribution transformers with minimal total high-voltage transmission cabling cost."
  - title: "Irrigation Pipeline Layout in Agriculture"
    description: "Laying out water drip tubing between greenhouse sensor hubs to minimize total pipe footage."
  - title: "Optical Fiber Backbone Layout"
    description: "Interconnecting municipal data centers with minimal trench digging and optical fiber installation expenditures."
weight: 66
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the **Manhattan distance** between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return the **minimum cost** to make all points connected. All points are connected if there is exactly one simple path between any two points.
