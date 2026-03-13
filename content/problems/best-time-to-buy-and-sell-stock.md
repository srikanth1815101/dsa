---
title: "Best Time to Buy and Sell Stock"
date: 2024-01-04T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/best-time-to-buy-and-sell-stock"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/best-time-to-buy-and-sell-stock"
hints:
  - "Track the minimum price seen so far."
  - "At each step, calculate the profit if you sold today and track the maximum."
youtubeId: "1pkOgXD63yU"
solutionUrl: "/solutions/best-time-to-buy-and-sell-stock-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "prices = [7,1,5,3,6,4]"
    output: "5"
    explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
  - input: "prices = [7,6,4,3,1]"
    output: "0"
    explanation: "Prices only decrease, so no transaction yields profit. Maximum profit is 0."
constraints:
  - "1 <= prices.length <= 10^5"
  - "0 <= prices[i] <= 10^4"
realWorld:
  - title: "Algorithmic Trading"
    description: "Determining optimal entry and exit points for stock trades based on historical data."
  - title: "Cryptocurrency Trading"
    description: "Finding the best buy/sell points in volatile crypto markets."
  - title: "Retail Arbitrage"
    description: "Buying products when prices are low and reselling when prices increase."
---

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to **maximize your profit** by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.
