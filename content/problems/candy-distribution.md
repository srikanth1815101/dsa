---
title: "Candy Distribution"
date: 2026-10-01T01:38:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Greedy"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CandyDistribution/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CandyDistribution/engineering"

hints:
  - "Perform two passes: left-to-right to ensure children with higher ratings than their left neighbor get more candies."
  - "Then perform right-to-left to ensure children with higher ratings than their right neighbor get more candies, taking max of both."

youtubeId: ""

solutionUrl: "/solutions/candy-distribution-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "ratings = [1, 0, 2]"
    output: "** `5` **"
    explanation: "** You can allocate to the first, second and third child with `2`, `1`, `2` candies respectively. Total = `2 + 1 + 2 = 5`."
  - input: "ratings = [1, 2, 2]"
    output: "** `4` **"
    explanation: "** You can allocate to the first, second and third child with `1`, `2`, `1` candies respectively. The third child gets 1 candy because it satisfies the condition (it has equal rating to child 2, not higher). Total = `1 + 2 + 1 = 4`."

constraints:
  - "n == ratings.length"
  - "1 <= n <= 2 * 10^4"
  - "0 <= ratings[i] <= 2 * 10^4"

realWorld:
  - title: "Employee Relative Performance Bonus Tiering"
    description: "Distributing discretionary compensation pools so that higher-performing adjacent teammates receive strictly larger awards."
  - title: "Resource Allocation in Tiered Gaming Leagues"
    description: "Awarding stamina potions to ranked leaderboard players based on comparative skill tiers."
  - title: "Load Balancer Quota Weight Distribution"
    description: "Distributing burst connection quotas across servers according to relative processing capacities."
weight: 39
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:
- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to distribute to the children.
