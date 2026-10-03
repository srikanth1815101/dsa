---
title: "IPO Problem"
date: 2026-10-01T02:01:00+05:30
difficulty: "Hard"
topics: ["Heap", "Greedy"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/IpoProblem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/IpoProblem/engineering"

hints:
  - "Sort all projects by their capital requirements in ascending order."
  - "Use a Max-Heap to store the profits of all projects whose capital requirement is <= current capital, greedily selecting the project with highest profit."

youtubeId: ""

solutionUrl: "/solutions/ipo-problem-solution/"

timeComplexity: "O(n log n + k log n)"
spaceComplexity: "O(n)"

examples:
  - input: "k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1]"
    output: "4"
    explanation: "Since your initial capital is 0, you can only start the project indexed 0. After finishing it you will obtain profit 1 and your capital becomes 1. With capital 1, you can either start the project indexed 1 or the project indexed 2. Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital. Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4."
  - input: "k = 3, w = 0, profits = [1, 2, 3], capital = [0, 1, 2]"
    output: "6"
    explanation: "Result is 6."

constraints:
  - "1 <= k <= 10^5"
  - "0 <= w <= 10^9"
  - "n == profits.length"
  - "n == capital.length"

realWorld:
  - title: "Venture Capital Seed Re-Investment"
    description: "Maximizing enterprise equity by selecting the most profitable startup ventures permissible under current liquid capital."
  - title: "Game Character Ability Progression"
    description: "Unlocking skill trees that provide maximum power gain under current character experience level budgets."
  - title: "Supply Chain Production Expansion Schedulers"
    description: "Funding manufacturing expansion projects to compound corporate operational cash flow before fiscal year-end."
weight: 62
---
<!-- All rights reserved to CSRGO DSA -->

Suppose LeetCode will start its **IPO** soon. In order to sell a good price to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO.

You are given `n` projects where the $i^{th}$ project has a pure profit `profits[i]` and a minimum capital of `capital[i]` is needed to start it.

Initially, you have `w` capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

Pick a list of **at most `k` distinct projects** from given projects to **maximize your final capital**, and return the final maximized capital.
