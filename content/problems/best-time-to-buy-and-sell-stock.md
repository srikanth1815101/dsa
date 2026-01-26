---
title: "Best Time to Buy and Sell Stock"
date: 2024-01-05T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Dynamic Programming"]
datastructures: ["Array"]
companies: ["Amazon", "Google", "Facebook", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/best-time-to-buy-and-sell-stock"
hints:
  - "You want to find the smallest valley followed by the largest peak."
  - "Keep track of the minimum price so far and the maximum profit."
youtubeId: "1pkOgXD63yU"
solutionUrl: "/solutions/best-time-to-buy-and-sell-stock-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "prices = [7,1,5,3,6,4]"
    output: "5"
    explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
  - input: "prices = [7,6,4,3,1]"
    output: "0"
    explanation: "In this case, no transactions are done and the max profit = 0."
constraints:
  - "1 <= prices.length <= 10^5"
  - "0 <= prices[i] <= 10^4"
realWorld:
  - title: "Algorithmic Trading"
    description: "Determining optimal entry and exit points for a trade based on historical data."
  - title: "Product Resale"
    description: "Buying an item at its lowest historical price and reselling at its peak."
javaTemplate: |
  class Solution {
      public int maxProfit(int[] prices) {
          
      }
  }
---

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

## Approach

Iterate through the prices array. Maintain a variable for the `minPrice` found so far and `maxProfit`. Update `minPrice` if current price is lower, else update `maxProfit` if `currentPrice - minPrice` is greater.
