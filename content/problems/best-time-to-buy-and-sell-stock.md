---
title: "Best Time to Buy and Sell Stock"
date: 2026-09-25T22:55:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Greedy", "Dynamic Programming"]
companies: ["Amazon", "Meta", "Apple"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BestTimeToBuyAndSellStock/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BestTimeToBuyAndSellStock/engineering"

hints:
  - "Can you keep track of the minimum buying price seen so far while iterating through the array?"
  - "For each day, the potential profit if sold on that day is current price minus the minimum price seen prior. Maintain the maximum of these profits."

youtubeId: ""

solutionUrl: "/solutions/best-time-to-buy-and-sell-stock-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "prices = [7, 1, 5, 3, 6, 4]"
    output: "5"
    explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
  - input: "prices = [7, 6, 4, 3, 1]"
    output: "0"
    explanation: "In this case, no transactions are done and the max profit is 0."

constraints:
  - "1 <= prices.length <= 10^5"
  - "0 <= prices[i] <= 10^4"

realWorld:
  - title: "Algorithmic Arbitrage Execution"
    description: "Detecting peak profit spread between single-entry buying dips and subsequent exit spikes in high-frequency trading market feeds."
  - title: "Commodity Spot Inventory Procurement"
    description: "Calculating maximum seasonal margin spread between wholesale buying acquisition cost and bulk liquidation spot rates."
  - title: "Cloud Spot Instance Cost Optimization"
    description: "Determining maximum savings between low-auction spot resource allocation and peak compute demand periods."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array `prices` where `prices[i]` is the price of a given stock on the $i^{\text{th}}$ day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Input Format
- An array of integers `prices`.

### Output Format
- An integer representing the maximum achievable profit.
