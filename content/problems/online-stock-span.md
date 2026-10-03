---
title: "Online Stock Span"
date: 2026-10-01T01:23:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Goldman Sachs", "Morgan Stanley"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/OnlineStockSpan/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/OnlineStockSpan/engineering"

hints:
  - "Maintain a monotonic decreasing stack storing pairs of (price, span)."
  - "Pop elements with price less than or equal to current price, accumulating their spans into current span."

youtubeId: ""

solutionUrl: "/solutions/online-stock-span-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "prices = [100, 80, 60, 70, 60, 75, 85]"
    output: "** `[1, 1, 1, 2, 1, 4, 6]` **"
    explanation: "** - Day 0 (100): span = 1 - Day 1 (80): span = 1 - Day 2 (60): span = 1 - Day 3 (70): 70 >= 60, span = 2 - Day 4 (60): span = 1 - Day 5 (75): 75 >= 60, 70, 60, span = 4 - Day 6 (85): 85 >= 75, 60, 70, 60, 80, span = 6"
  - input: "prices = [10, 20, 30, 40, 50]"
    output: "** `[1, 2, 3, 4, 5]` **"
    explanation: "** Each day's price is strictly higher than all preceding days, so the span spans from day 0 to current day."

constraints:
  - "1 <= prices.length <= 10^5"
  - "1 <= prices[i] <= 10^5"
  - "At most 10^5 calls will be made to calculate the span."
realWorld:
  - title: "Financial Market Momentum Tracking"
    description: "Determining consecutive trading periods where asset prices remained below current levels."
  - title: "Load Balancer Request Burst Analysis"
    description: "Measuring continuous time windows where request arrival rates remained below peak capacity."
  - title: "Temperature Anomaly Detection"
    description: "Identifying historical streaks where sensor temperatures were strictly surpassed by current heatwaves."
weight: 24
---
<!-- All rights reserved to CSRGO DSA -->

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

- For example, if the prices of the stock in the last four days is `[7, 2, 1, 2]` and the price of the stock today is `2`, then the span of today is `4` because starting from today, the price of the stock was less than or equal to `2` for `4` consecutive days.
- Also, if the prices of the stock in the last four days is `[7, 34, 1, 2]` and the price of the stock today is `8`, then the span of today is `3` because starting from today, the price of the stock was less than or equal to `8` for `3` consecutive days.

Given an integer array `prices` representing consecutive daily stock prices, return an array `spans` of the same length where `spans[i]` is the span of the stock's price on day `i`.
