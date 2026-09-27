---
title: "Coin Change Combination"
date: 2026-09-27T20:23:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CoinChangeCombination/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CoinChangeCombination/engineering"

hints:
  - "To avoid duplicate permutations like {2, 3} and {3, 2}, iterate through each coin denomination in the outer loop."
  - "Maintain a 1D DP table dp[amount + 1] where dp[j] accumulates the ways to form sum j using the coins considered so far."

youtubeId: ""

solutionUrl: "/solutions/coin-change-combination-solution/"

timeComplexity: "O(n * amount)"
spaceComplexity: "O(amount)"

examples:
  - input: "coins = [2, 3, 5], amount = 7"
    output: "2"
    explanation: "There are two distinct combinations: {2, 5} and {2, 2, 3}."
  - input: "coins = [1, 2, 5], amount = 5"
    output: "4"
    explanation: "The four distinct combinations are {5}, {1, 2, 2}, {1, 1, 1, 2}, and {1, 1, 1, 1, 1}."

constraints:
  - "1 <= coins.length <= 300"
  - "1 <= coins[i] <= 5000"
  - "0 <= amount <= 5000"

realWorld:
  - title: "Automated Currency Dispenser Combination Logic"
    description: "Computing distinct valid denomination dispensing combinations for cash register drawers and ATM payout cassettes."
  - title: "Product Packaging Bundle Optimization"
    description: "Calculating order-independent SKU pack bundles that satisfy an exact requested total unit volume."
  - title: "Cryptographic Coin Token Exchange Splits"
    description: "Determining distinct non-ordered token fractional splits to reconcile multi-party digital payments."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. You have an infinite supply of each coin denomination.

Find the number of distinct combinations that make up that amount. Order of coins does not matter (e.g., `{2, 3}` and `{3, 2}` represent the exact same combination).

Return the total number of distinct combinations.
