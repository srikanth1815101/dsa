---
title: "Coin Change (Minimum Coins)"
date: 2026-10-01T01:49:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "BFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CoinChangeMinimumCoins/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CoinChangeMinimumCoins/engineering"

hints:
  - "Define dp[i] as the minimum coins needed to make amount i, initialized to amount + 1."
  - "For each coin and each amount from coin to total, update dp[i] = min(dp[i], dp[i - coin] + 1)."

youtubeId: ""

solutionUrl: "/solutions/coin-change-minimum-coins-solution/"

timeComplexity: "O(amount * n)"
spaceComplexity: "O(amount)"

examples:
  - input: "coins = [1, 2, 5], amount = 11"
    output: "3"
    explanation: "11 = 5 + 5 + 1 (3 coins)."
  - input: "coins = [2], amount = 3"
    output: "-1"
    explanation: "Amount 3 cannot be formed using only coins of denomination 2."

constraints:
  - "1 <= coins.length <= 12"
  - "1 <= coins[i] <= 2^31 - 1"
  - "0 <= amount <= 10^4"

realWorld:
  - title: "Automated Cash Dispenser Dispensing"
    description: "Dispensing cash bills in an ATM machine to fulfill a withdrawal request using the fewest physical currency notes."
  - title: "Container VM Memory Packing"
    description: "Allocating server memory instances using standard predefined VM slice sizes to minimize slice count."
  - title: "Shipping Box Packing with Standard Envelopes"
    description: "Packing ordered product weights using standard warehouse parcel sizes to minimize package count."
weight: 50
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.
