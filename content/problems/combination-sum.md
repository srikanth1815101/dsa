---
title: "Combination Sum"
date: 2024-01-17T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Backtracking"]
companies: ["Amazon", "Facebook", "Airbnb"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/combination-sum"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/combination-sum"
hints:
  - "Use backtracking to explore all possible combinations."
  - "You can reuse the same element multiple times."
youtubeId: "GBKI9VSKdGg"
solutionUrl: "/solutions/combination-sum-solution/"
timeComplexity: "O(n^(target/min))"
spaceComplexity: "O(target/min)"
examples:
  - input: "candidates = [2,3,6,7], target = 7"
    output: "[[2,2,3],[7]]"
    explanation: "2+2+3=7 and 7=7 are the only combinations that sum to 7."
  - input: "candidates = [2,3,5], target = 8"
    output: "[[2,2,2,2],[2,3,3],[3,5]]"
    explanation: "Multiple combinations sum to 8."
constraints:
  - "1 <= candidates.length <= 30"
  - "2 <= candidates[i] <= 40"
  - "All elements of candidates are distinct"
  - "1 <= target <= 40"
realWorld:
  - title: "Currency Change"
    description: "Finding combinations of denominations to make a target amount."
  - title: "Resource Allocation"
    description: "Determining ways to combine components to meet requirements."
  - title: "Menu Planning"
    description: "Combining food items to meet specific nutritional targets."
---

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.
