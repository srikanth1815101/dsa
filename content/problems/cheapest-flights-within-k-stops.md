---
title: "Cheapest Flights Within K Stops"
date: 2026-09-27T21:05:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Uber"]
topics: ["Graph", "Shortest Path", "Dynamic Programming"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CheapestFlightsWithinKStops/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CheapestFlightsWithinKStops/engineering"
hints:
  - "At most k stops is equivalent to finding a path from src to dst containing at most k + 1 edges."
  - "Use a modified Bellman-Ford algorithm: run exactly k + 1 iterations of edge relaxation."
  - "In each iteration, maintain a copy of the previous distance array to prevent using more than one edge per step."
youtubeId: ""
solutionUrl: "/solutions/cheapest-flights-within-k-stops-solution/"
timeComplexity: "O(k * E)"
spaceComplexity: "O(V)"
examples:
  - input: |
      n = 4
      flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]]
      src = 0
      dst = 3
      k = 1
    output: |
      700
    explanation: "The optimal path with at most 1 stop is 0 -> 1 -> 3 with total cost 100 + 600 = 700. The path 0 -> 1 -> 2 -> 3 costs 400 but requires 2 stops, which exceeds k = 1."
  - input: |
      n = 3
      flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
      src = 0
      dst = 2
      k = 1
    output: |
      200
    explanation: "Path 0 -> 1 -> 2 has 1 stop with cost 100 + 100 = 200, which is cheaper than direct flight 0 -> 2 (500)."
  - input: |
      n = 3
      flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
      src = 0
      dst = 2
      k = 0
    output: |
      500
    explanation: "With k = 0 stops, only direct flights are allowed. Cost = 500."
constraints:
  - "1 <= n <= 100"
  - "0 <= flights.length <= (n * (n - 1) / 2)"
  - "flights[i].length == 3"
  - "0 <= fromi, toi < n"
  - "fromi != toi"
  - "1 <= pricei <= 10^4"
  - "There will not be any multiple flights between the same two airlines."
  - "0 <= src, dst, k < n"
  - "src != dst"
realWorld:
  - title: "Flight Booking Engine Stopover Optimization"
    description: "Commercial travel aggregate platforms (e.g., Kayak, Google Flights) balance ticket prices against maximum allowable layover legs."
  - title: "Inter-Satellite Packet Routing with TTL Limits"
    description: "Low-Earth orbit satellite constellations route communication packets under hard hop count (TTL) bounds."
  - title: "Multi-Modal Freight Shipping Cost Minimization"
    description: "Logistics shipping planners calculate lowest freight transit costs subject to maximum warehouse transfer limitations."
---

<!-- All rights reserved to CSRGO DSA -->

There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [fromi, toi, pricei]` indicates that there is a flight from city `fromi` to city `toi` with cost `pricei`.

You are also given three integers `src`, `dst`, and `k`. Return the **cheapest price** from `src` to `dst` with at most `k` stops. If there is no such route, return `-1`.
