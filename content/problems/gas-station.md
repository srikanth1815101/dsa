---
title: "Gas Station"
date: 2026-10-01T01:37:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Greedy"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/GasStation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/GasStation/engineering"

hints:
  - "If total gas across all stations is less than total cost, completing the circuit is impossible, return -1."
  - "If tank drops below zero while traveling from starting station, reset start to next station and reset current tank balance to zero."

youtubeId: ""

solutionUrl: "/solutions/gas-station-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "gas = [1, 2, 3, 4, 5]`, `cost = [3, 4, 5, 1, 2]"
    output: "** `3` **"
    explanation: "** - Start at station 3 (index 3) and fill up with 4 unit of gas. Tank = 0 + 4 = 4. - Travel to station 4. Cost is 1. Tank = 4 - 1 + 5 = 8. - Travel to station 0. Cost is 2. Tank = 8 - 2 + 1 = 7. - Travel to station 1. Cost is 3. Tank = 7 - 3 + 2 = 6. - Travel to station 2. Cost is 4. Tank = 6 - 4 + 3 = 5. - Travel to station 3. Cost is 5. Your gas is just enough to return back to station 3. Therefore, return 3 as the starting index."
  - input: "gas = [2, 3, 4]`, `cost = [3, 4, 3]"
    output: "** `-1` **"
    explanation: "** Total gas is 2 + 3 + 4 = 9. Total cost is 3 + 4 + 3 = 10. Since total gas is strictly less than total cost, it is impossible to complete the circuit regardless of where you start."

constraints:
  - "n == gas.length == cost.length"
  - "1 <= n <= 10^5"
  - "0 <= gas[i], cost[i] <= 10^4"

realWorld:
  - title: "Autonomous EV Logistics Routing"
    description: "Finding an initial depot charging station where an autonomous vehicle can service a circular delivery route without battery depletion."
  - title: "Space Probe Orbital Maneuver Planning"
    description: "Determining orbital insertion milestones where satellite thruster fuel burns balance solar recharge cycles."
  - title: "Resilient Drone Reconnaissance Patrols"
    description: "Validating circular inspection flight paths against variable headwind energy drains."
weight: 38
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` gas stations along a circular route, where the amount of gas at the `i`-th station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`-th station to its next `(i + 1)`-th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique.
