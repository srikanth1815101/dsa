---
title: "Coin Change Permutation"
date: 2026-09-27T20:24:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Recursion"]
companies: ["Amazon", "Google", "Uber"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CoinChangePermutation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CoinChangePermutation/engineering"

hints:
  - "Because order matters (e.g., {2, 3} and {3, 2} are distinct), iterate through target amounts 1 to amount in the outer loop."
  - "For each amount j, try every coin c where j >= c and sum up dp[j - c]."

youtubeId: ""

solutionUrl: "/solutions/coin-change-permutation-solution/"

timeComplexity: "O(n * amount)"
spaceComplexity: "O(amount)"

examples:
  - input: "coins = [2, 3, 5], amount = 7"
    output: "5"
    explanation: "The 5 distinct ordered permutations are: (2, 5), (5, 2), (2, 2, 3), (2, 3, 2), and (3, 2, 2)."
  - input: "coins = [1, 2], amount = 3"
    output: "3"
    explanation: "The 3 ordered permutations are: (1, 1, 1), (1, 2), and (2, 1)."

constraints:
  - "1 <= coins.length <= 300"
  - "1 <= coins[i] <= 1000"
  - "0 <= amount <= 1000"

realWorld:
  - title: "API Rate-Limiting Burst Sequence Combinations"
    description: "Calculating all ordered token deduction permutations that can deplete a leaky bucket capacity."
  - title: "Automated Vending Machine Payment Feeds"
    description: "Tracking sequential coin insertion order combinations to validate transaction state machine transitions."
  - title: "Robotic Stride Step Permutations"
    description: "Enumerating distinct ordered sequences of forward stride lengths reaching an exact obstacle distance."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `coins` of distinct positive integers and an integer `amount` representing a target sum. You have an infinite supply of each coin denomination.

Find the number of possible distinct permutations that add up to `amount`. Two combinations are considered different if the order of the coins differs (e.g., `(2, 3)` and `(3, 2)` are distinct).

Return the total number of permutations.
